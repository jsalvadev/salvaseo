import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const runtime = locals.runtime;
    const RESEND_API_KEY = runtime?.env?.RESEND_API_KEY;
    const EMAIL_TO = runtime?.env?.EMAIL_TO;
    const EMAIL_FROM = runtime?.env?.EMAIL_FROM;

    if (!RESEND_API_KEY || !EMAIL_TO || !EMAIL_FROM) {
      return new Response(
        JSON.stringify({ error: 'Configuración de email incompleta' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    const data = await request.json();
    const { email } = data;

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email es obligatorio' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      replyTo: email,
      subject: 'Nuevo contacto interesado en SEO local',
      html: `
        <h2>Nuevo contacto desde la landing page</h2>
        <p>Un usuario ha dejado su email para hablar sobre SEO local:</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>Escríbele para iniciar la conversación.</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({
          error: 'Error al enviar el email',
          details: error?.message || String(error)
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email enviado correctamente' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('API error:', error);
    return new Response(
      JSON.stringify({
        error: 'Error interno del servidor',
        details: error instanceof Error ? error.message : String(error)
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
