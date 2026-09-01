async function loadJobs() {

    const container = document.getElementById('jobs-container');
    const noJobs = document.getElementById('no-jobs');

    try {

        const response = await fetch('./assets/data/jobs.json');

        if (!response.ok) {
            throw new Error('Stellen konnten nicht geladen werden.');
        }

        const jobs = await response.json();

        // Nur aktive Stellen anzeigen
        const activeJobs = jobs.filter(job => job.active);

        container.innerHTML = '';

        // Keine Stellen vorhanden
        if (activeJobs.length === 0) {
            container.classList.add('hidden');
            noJobs.classList.remove('hidden');
            return;
        }


        activeJobs.forEach(job => {

            const requirements = job.requirements
                .map(item => `
                    <li class="flex items-start gap-3">
                        <i class="fa-solid fa-check text-[#d4a373] mt-1"></i>
                        <span>${item}</span>
                    </li>
                `)
                .join('');


            const benefits = job.benefits
                .map(item => `
                    <li class="flex items-start gap-3">
                        <i class="fa-solid fa-check text-[#d4a373] mt-1"></i>
                        <span>${item}</span>
                    </li>
                `)
                .join('');


            const jobElement = document.createElement('article');

            jobElement.className = 'space-y-8';

            jobElement.innerHTML = `

                <!-- HEADER -->
                <div class="bg-[#1a3a4a] rounded-3xl p-8 sm:p-10 lg:p-12">

                    <span
                        class="inline-flex items-center gap-2 px-4 py-2 bg-[#d4a373]/15 text-[#d4a373] rounded-full text-xs font-bold uppercase tracking-widest">

                        <i class="fa-solid fa-graduation-cap"></i>
                        ${job.type}

                    </span>

                    <h2 class="mt-5 text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                        ${job.title}
                    </h2>

                    <p class="mt-4 text-slate-300 leading-7 max-w-3xl">
                        ${job.description}
                    </p>

                </div>


                <!-- DETAILS -->
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">

                    ${createInfoCard(
                        'fa-calendar',
                        'Beginn',
                        job.start
                    )}

                    ${createInfoCard(
                        'fa-location-dot',
                        'Ort',
                        job.location
                    )}

                    ${createInfoCard(
                        'fa-briefcase',
                        'Anstellung',
                        job.employment
                    )}

                    ${createInfoCard(
                        'fa-school',
                        'Schulabschluss',
                        job.schoolDegree
                    )}

                </div>


                <!-- ANFORDERUNGEN / VORTEILE -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    <div class="bg-slate-50 rounded-3xl p-8 sm:p-10">

                        <span class="text-[#d4a373] text-xs font-bold uppercase tracking-[0.3em]">
                            Das bringst du mit
                        </span>

                        <h3 class="mt-3 text-2xl font-black text-[#1a3a4a]">
                            Das wünschen wir uns
                        </h3>

                        <ul class="mt-7 space-y-4 text-slate-600">
                            ${requirements}
                        </ul>

                    </div>


                    <div class="bg-slate-50 rounded-3xl p-8 sm:p-10">

                        <span class="text-[#d4a373] text-xs font-bold uppercase tracking-[0.3em]">
                            Das bieten wir
                        </span>

                        <h3 class="mt-3 text-2xl font-black text-[#1a3a4a]">
                            Deine Ausbildung bei uns
                        </h3>

                        <ul class="mt-7 space-y-4 text-slate-600">
                            ${benefits}
                        </ul>

                    </div>

                </div>


                <!-- BERUFSSCHULE -->
                <div class="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">

                    <span class="text-[#d4a373] text-xs font-bold uppercase tracking-[0.3em]">
                        Berufsschule
                    </span>

                    <h3 class="mt-3 text-xl font-black text-[#1a3a4a]">
                        ${job.school}
                    </h3>

                    <p class="mt-2 text-slate-500">
                        ${job.schoolLocation}
                    </p>

                </div>


                <!-- BEWERBUNG -->
                <div>

                    <div class="mb-8">

                        <span class="text-[#d4a373] text-xs font-bold uppercase tracking-[0.3em]">
                            Bewerbung
                        </span>

                        <h3 class="mt-3 text-2xl sm:text-3xl font-black text-[#1a3a4a]">
                            Bewirb dich bei uns
                        </h3>

                        <p class="mt-4 text-slate-500 leading-7">
                            Schicke uns deine Bewerbungsunterlagen inklusive
                            Lebenslauf und Zeugnis per E-Mail oder schriftlich
                            per Post.
                        </p>

                    </div>


                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <!-- EMAIL -->
                        <div
                            class="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">

                            <i class="fa-solid fa-envelope text-2xl text-[#d4a373]"></i>

                            <h4 class="mt-5 text-xl font-black text-[#1a3a4a]">
                                Per E-Mail
                            </h4>

                            <p class="mt-3 text-slate-500">
                                Sende deine Bewerbung direkt an:
                            </p>

                            <a href="mailto:${job.application.email}"
                               class="mt-5 inline-flex items-center gap-2 font-bold text-[#1a3a4a] hover:text-[#d4a373] transition">

                                <i class="fa-solid fa-paper-plane"></i>
                                ${job.application.email}

                            </a>

                        </div>


                        <!-- POST -->
                        <div
                            class="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">

                            <i class="fa-solid fa-envelope-open-text text-2xl text-[#d4a373]"></i>

                            <h4 class="mt-5 text-xl font-black text-[#1a3a4a]">
                                Schriftlich
                            </h4>

                            <p class="mt-3 text-slate-500">
                                Oder sende deine Unterlagen an:
                            </p>

                            <address class="mt-5 not-italic font-bold text-[#1a3a4a] leading-7">

                                ${job.application.company}<br>
                                ${job.application.street}<br>
                                ${job.application.postalCode}
                                ${job.application.city}

                            </address>

                        </div>

                    </div>

                </div>


                <!-- CTA -->
                <div class="bg-[#1a3a4a] rounded-3xl p-8 sm:p-12">

                    <span class="text-[#d4a373] text-xs font-bold uppercase tracking-[0.3em]">
                        Ausbildung & Karriere
                    </span>

                    <h3 class="mt-3 text-3xl font-black text-white">
                        Wir freuen uns auf deine Bewerbung.
                    </h3>

                    <p class="mt-4 text-slate-300 leading-7">
                        Starte deine berufliche Zukunft in unserer
                        Zahnarztpraxis in ${job.location}.
                    </p>

                    <a href="mailto:${job.application.email}"
                       class="mt-7 inline-flex justify-center items-center gap-2 px-7 py-4 bg-[#d4a373] text-white rounded-full font-bold hover:opacity-90 transition">

                        <i class="fa-solid fa-envelope"></i>
                        Jetzt bewerben

                    </a>

                </div>

            `;

            container.appendChild(jobElement);

        });


    } catch (error) {

        console.error(error);

        container.innerHTML = `
            <div class="bg-red-50 rounded-2xl p-6 text-red-700">
                Die Stellenangebote konnten leider nicht geladen werden.
            </div>
        `;
    }
}


function createInfoCard(icon, label, value) {

    return `
        <div class="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">

            <i class="fa-solid ${icon} text-[#d4a373] mb-3"></i>

            <span class="block text-xs uppercase tracking-widest text-slate-400 font-bold">
                ${label}
            </span>

            <strong class="block mt-1 text-[#1a3a4a]">
                ${value}
            </strong>

        </div>
    `;
}


// Stellen laden
loadJobs();