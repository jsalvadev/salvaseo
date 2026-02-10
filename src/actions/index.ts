import { ActionError, defineAction } from "astro:actions";

import { Resend } from "resend";
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  sendContactForm: defineAction({
    accept: "form",
    handler: async (input) => {
      const { data, error } = await resend.emails.send({
        from: import.meta.env.EMAIL_FROM,
        to: import.meta.env.EMAIL_TO,
        replyTo: input.email,
        subject: `Nuevo mensaje de contacto de ${input.name || 'Sin nombre'}`,
        html: `
          <h2>Nuevo mensaje desde el formulario de contacto</h2>
          <p><strong>Nombre:</strong> ${input.name || 'No especificado'}</p>
          <p><strong>Email:</strong> ${input.email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${input.message?.replace(/\n/g, '<br>') || ''}</p>
        `,
      });

      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }

      return data;
    },
  }),

  sendCtaEmail: defineAction({
    accept: "form",
    handler: async (input) => {
      const { data, error } = await resend.emails.send({
        from: import.meta.env.EMAIL_FROM,
        to: import.meta.env.EMAIL_TO,
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
          code: "BAD_REQUEST",
          message: error.message,
        });
      }

      return data;
    },
  }),
};
