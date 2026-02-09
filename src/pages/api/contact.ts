import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { RESEND_API_KEY, EMAIL_TO, EMAIL_FROM } from 'astro:env/server';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const resend = new Resend(RESEND_API_KEY);

    const data = await request.json();
    const { name, email, message } = data;

    if (!email || !message) {
      return new Response(
        JSON.stringify({ error: 'Email y mensaje son obligatorios' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name || 'Sin nombre'}`,
      html: `
        <h2>Nuevo mensaje desde el formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${name || 'No especificado'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
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
      JSON.stringify({ success: true, message: 'Mensaje enviado correctamente' }),
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
