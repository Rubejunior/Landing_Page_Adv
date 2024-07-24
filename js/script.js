document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.App-header');
    const scrollTopBtn = document.getElementById('scrollTop');
    const whatsappButton = document.querySelector('.whatsapp-button');
    const tooltip = document.createElement('span');
    tooltip.className = 'tooltip';
    tooltip.innerText = 'WhatsApp';
    whatsappButton.appendChild(tooltip);

    whatsappButton.addEventListener('mouseover', function () {
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
    });

    whatsappButton.addEventListener('mouseout', function () {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    });

    const toggleHeaderClass = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    const toggleScrollTopBtn = () => {
        if (window.scrollY >= 560) {
            scrollTopBtn.classList.add("show-scroll");
        } else {
            scrollTopBtn.classList.remove("show-scroll");
        }
    };

    window.addEventListener('scroll', function () {
        toggleHeaderClass();
        toggleScrollTopBtn();
    });

    const arrowDown = document.createElement('div');
    arrowDown.classList.add('arrow-down');
    arrowDown.innerHTML = '&darr;';
    document.body.appendChild(arrowDown);

    arrowDown.addEventListener('click', function () {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    });

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        observer.observe(element);
    });
});

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        fetch('https://seuservidor.com/salvar-ip', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ip: data.ip })
        });
    });

(function (a, m, o, c, r, m) {
    a[m] = { id: "819435", hash: "a8ec0a37dd0bf4cb961d164c4cb47306890fdb3b018b9a16051ff4695c25a4be", locale: "pt", setMeta: function (p) { this.params = (this.params || []).concat([p]) } };
    a[o] = a[o] || function () { (a[o].q = a[o].q || []).push(arguments) };
    var d = a.document, s = d.createElement('script'); s.async = true; s.id = m + '_script'; s.src = 'https://gso.kommo.com/js/button.js'; d.head && d.head.appendChild(s)
})(window, 0, 'crmPlugin', 0, 0, 'crm_plugin');
