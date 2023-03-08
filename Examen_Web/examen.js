
const nutritionPlans = {
 "hola": "¡Hola! ¿Cómo estás?",
  "bien": "Me alegra escuchar eso.",
  "mal": "Lo siento. ¿Puedo ayudarte en algo?",
  "adiós": "¡Hasta luego! ¡Que tengas un buen día!",
  "cuanto cuesta el plan": "el precio de los planes son 60€ y el completo son 120€: [Insertar plan de nutrición].",
  "bajar de peso": "Aquí tienes un plan de nutrición para bajar de peso: [Insertar plan de nutrición para bajar de peso].",
  "ganar masa muscular": "Aquí tienes un plan de nutrición para ganar masa muscular: [Insertar plan de nutrición para ganar masa muscular].",
  "dieta vegetariana": "Aquí tienes un plan de nutrición para una dieta vegetariana: [Insertar plan de nutrición para una dieta vegetariana]."
  };
const chat = document.getElementById("chat");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

// manejamos el envío del formulario de chat
chatForm.addEventListener("submit", (event) => {
  event.preventDefault(); // evitamos que la página se recargue
  const userMessage = chatInput.value; // obtenemos el mensaje del usuario
  chatInput.value = ""; // borramos el contenido del campo de entrada
  addMessage("Tú", userMessage); // agregamos el mensaje del usuario al chat
  const nutritionPlan = nutritionPlans[userMessage.toLowerCase()]; // buscamos un plan de nutrición predeterminado
  if (nutritionPlan) {
    addMessage("Chatbot", nutritionPlan); // si encontramos un plan de nutrición, lo agregamos al chat
  } else {
    addMessage("Chatbot", "Lo siento, no tengo información sobre ese plan de nutrición."); // si no encontramos un plan de nutrición, mostramos un mensaje predeterminado
  }
});

// función para agregar un mensaje al chat
function addMessage(sender, message) {
  const li = document.createElement("li");
  li.innerText = `${sender}: ${message}`;
  chat.appendChild(li);
}