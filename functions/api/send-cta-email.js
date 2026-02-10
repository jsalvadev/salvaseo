// Cloudflare Pages Function for sending CTA emails via Resend
export async function onRequestPost(context) {
  try {
    const formData = await context.request.formData();
    const email = formData.get('email');

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email es obligatorio' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get environment variables from Cloudflare
    const RESEND_API_KEY = context.env.RESEND_API_KEY;
    const EMAIL_TO = context.env.EMAIL_TO;
    const EMAIL_FROM = context.env.EMAIL_FROM;

    if (!RESEND_API_KEY || !EMAIL_TO || !EMAIL_FROM) {
      return new Response(
        JSON.stringify({ error: 'Configuración del servidor incompleta' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: EMAIL_FROM,
        to: EMAIL_TO,
        replyTo: email,
        subject: 'Nuevo contacto interesado en SEO local',
        html: `
          <h2>Nuevo contacto desde la landing page</h2>
          <p>Un usuario ha dejado su email para hablar sobre SEO local:</p>
          <p><strong>Email:</strong> ${email}</p>
          <p>Escríbele para iniciar la conversación.</p>
        `
      })
    });

    if (!response.ok) {
      const error = await response.json();
      return new Response(
        JSON.stringify({ error: error.message || 'Error al enviar el email' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    return new Response(
      JSON.stringify({ success: true, data }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Error interno del servidor' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
