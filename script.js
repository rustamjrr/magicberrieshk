document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("orderForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const quantity = document.getElementById("quantity").value;
        const message = document.getElementById("message").value;
        
        const confirmationMessage = `Thank you, ${name}! Your order for ${quantity} chocolate-covered strawberries has been received. We will contact you at ${email}.`;
        
        document.getElementById("confirmationMessage").innerText = confirmationMessage;
        form.reset();
    });
});
