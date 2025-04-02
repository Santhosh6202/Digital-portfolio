document.addEventListener("DOMContentLoaded", () => { const downloadBtn = document.getElementById("download-btn");

    downloadBtn.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = "SANTHOSH.G(RESUME).pdf";
        link.download = "Santhosh_G_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    
    // Smooth scrolling effect
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
    
    });