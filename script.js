const status = document.getElementById("status");
const balance = document.getElementById("balance");
const connectBtn = document.getElementById("connectBtn");

connectBtn.addEventListener("click", () => {
    const token = document.getElementById("token").value.trim();

    if (!token) {
        status.textContent = "Please enter your API token.";
        return;
    }

    status.textContent = "Connecting...";

    // Placeholder until we add the official Deriv API connection.
    setTimeout(() => {
        status.textContent = "Ready to connect";
        balance.textContent = "Balance: Waiting...";
    }, 1000);
});
