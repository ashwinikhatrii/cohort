
const password = document.getElementById("password");
const strength = document.getElementById("strength");
const strengthText = document.getElementById("strengthText");
const togglePassword = document.getElementById("togglePassword");

const checks = {
    length: value => value.length >= 8,
    uppercase: value => /[A-Z]/.test(value),
    lowercase: value => /[a-z]/.test(value),
    number: value => /[0-9]/.test(value),
    special: value => /[^A-Za-z0-9]/.test(value)
};

password.addEventListener("input", () => {
    const value = password.value;
    let score = 0;

    for (const key in checks) {
        const passed = checks[key](value);

        document.getElementById(key)
            .classList.toggle("valid", passed);

        if (passed) score++;
    }

    if (value.length === 0) {
        strength.style.width = "0";
        strengthText.textContent = "Enter a password";
        return;
    }

    const levels = [
        { text: "Very Weak", color: "#ef4444" },
        { text: "Weak", color: "#f97316" },
        { text: "Medium", color: "#eab308" },
        { text: "Strong", color: "#22c55e" },
        { text: "Very Strong", color: "#10b981" }
    ];

    const level = score - 1;

    strength.style.width = `${score * 20}%`;
    strength.style.background = levels[level].color;
    strengthText.textContent = levels[level].text;
});

togglePassword.addEventListener("click", () => {
    const isHidden = password.type === "password";

    password.type = isHidden ? "text" : "password";
    togglePassword.textContent = isHidden ? "Hide" : "Show";
});
