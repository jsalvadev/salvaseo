import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';
import { RESEND_API_KEY, EMAIL_TO, EMAIL_FROM } from 'astro:env/server';

export const server = {
  sendContactForm: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().optional(),
      email: z.string().email(),
      message: z.string().min(1),
    }),
    handler: async (input) => {
      const resend = new Resend(RESEND_API_KEY);

      const { data, error } = await resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_TO,
        replyTo: input.email,
        subject: `Nuevo mensaje de contacto de ${input.name || 'Sin nombre'}`,
        html: `
          <h2>Nuevo mensaje desde el formulario de contacto</h2>
          <p><strong>Nombre:</strong> ${input.name || 'No especificado'}</p>
          <p><strong>Email:</strong> ${input.email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${input.message.replace(/\n/g, '<br>')}</p>
        `,
      });

      if (error) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: error.message,
        });
      }

      return data;
    },
  }),

  sendCtaEmail: defineAction({
    accept: 'form',
    input: z.object({
      email: z.string().email(),
    }),
    handler: async (input) => {
      const resend = new Resend(RESEND_API_KEY);

      const { data, error } = await resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_TO,
        replyTo: input.email,
        subject: 'Nuevo contacto interesado en SEO local',
        html: `
          <h2>Nuevo contacto desde la landing page</h2>
          <p>Un usuario ha dejado su email para hablar sobre SEO local:</p>
          <p><strong>Email:</strong> ${input.email}</p>
          <p>Escríbele para iniciar la conversación.</p>
        `,
      });

      if (error) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: error.message,
        });
      }

      return data;
    },
  }),
};
