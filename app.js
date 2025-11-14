const form = document.getElementById("bookingForm");
const msg = document.getElementById("formMsg");

// ⛓️ Cambia esta URL por tu Webhook de n8n
const WEBHOOK_URL = "https://ritoph.app.n8n.cloud/webhook-test/limse_form";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    phone: form.phone.value,
    service: form.service.value,
    date: form.date.value,
    time: form.time.value,
    address: form.address.value,
    notes: form.notes.value,
  };

  msg.textContent = "Enviando reserva...";
  msg.style.color = "#555";

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      msg.textContent = "✅ Reserva enviada con éxito.";
      msg.style.color = "green";
      form.reset();
    } else {
      msg.textContent = "⚠️ Ocurrió un error al enviar los datos.";
      msg.style.color = "red";
    }
  } catch (err) {
    msg.textContent = "❌ No se pudo conectar con el servidor.";
    msg.style.color = "red";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menuBtn");
  const nav = document.getElementById("navMenu");

  btn.addEventListener("click", () => {
    nav.classList.toggle("open");  // ← ESTA ES LA CLAVE
  });
});
