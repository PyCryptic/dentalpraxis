 const sliderTrack = document.getElementById("sliderTrack");
    const slides = document.querySelectorAll(".slide");

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const indicators = document.getElementById("indicators");

    let currentSlide = 0;


    function updateSlider() {

        sliderTrack.style.transform =
            `translateX(-${currentSlide * 100}%)`;

        document.querySelectorAll(".indicator").forEach((indicator, index) => {

            if (index === currentSlide) {
                indicator.classList.add("bg-[#d4a373]", "w-6");
                indicator.classList.remove("bg-slate-300", "w-2");
            } else {
                indicator.classList.add("bg-slate-300", "w-2");
                indicator.classList.remove("bg-[#d4a373]", "w-6");
            }

        });
    }


    nextBtn.addEventListener("click", () => {

        currentSlide =
            (currentSlide + 1) % slides.length;

        updateSlider();

    });


    prevBtn.addEventListener("click", () => {

        currentSlide =
            (currentSlide - 1 + slides.length) % slides.length;

        updateSlider();

    });


    slides.forEach((slide, index) => {

        const indicator = document.createElement("button");

        indicator.type = "button";

        indicator.className =
            "indicator h-2 rounded-full bg-slate-300 transition-all duration-300";

        indicator.setAttribute(
            "aria-label",
            `Bild ${index + 1} anzeigen`
        );

        indicator.addEventListener("click", () => {

            currentSlide = index;

            updateSlider();

        });

        indicators.appendChild(indicator);

    });


    updateSlider();