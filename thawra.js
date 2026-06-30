// انتظر تحميل DOM بالكامل
        document.addEventListener('DOMContentLoaded', function() {
            
            // ============================================================
            // 10️⃣ INTRO / LOADER
            // ============================================================
            (function introLoader() {
                const loader = document.getElementById('loader');
                const yearEl = document.getElementById('loaderYear');
                const fillEl = document.getElementById('loaderFill');
                const finalTitle = document.getElementById('loaderFinalTitle');

                // تأكد من وجود جميع العناصر
                if (!loader || !yearEl || !fillEl || !finalTitle) {
                    console.error('Loader elements not found');
                    return;
                }

                const years = ['1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962'];
                let idx = 0;
                let progress = 0;
                const totalSteps = years.length;

                const interval = setInterval(() => {
                    if (idx < totalSteps) {
                        yearEl.textContent = years[idx];
                        progress = ((idx + 1) / totalSteps) * 100;
                        fillEl.style.width = progress + '%';
                        idx++;
                    } else {
                        clearInterval(interval);
                        finalTitle.classList.add('show');
                        setTimeout(() => {
                            loader.style.opacity = '0';
                            setTimeout(() => {
                                loader.style.display = 'none';
                            }, 1000);
                        }, 1200);
                    }
                }, 450);
            })();

            // ============================================================
            // 16️⃣ PROGRESS BAR & SIDEBAR PROGRESS
            // ============================================================
            window.addEventListener('scroll', function() {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const progress = (scrollTop / docHeight) * 100;

                // Progress bar
                const progressBar = document.getElementById('progress-bar');
                if (progressBar) {
                    progressBar.style.width = progress + '%';
                }

                // Sidebar progress
                const sidebarProgress = document.getElementById('sidebarProgress');
                if (sidebarProgress) {
                    sidebarProgress.textContent = Math.round(progress);
                }

                // Back to top
                const backBtn = document.getElementById('backToTop');
                if (backBtn) {
                    if (scrollTop > 400) {
                        backBtn.classList.add('visible');
                    } else {
                        backBtn.classList.remove('visible');
                    }
                }
            });

            // ============================================================
            // 16️⃣ BACK TO TOP
            // ============================================================
            const backToTopBtn = document.getElementById('backToTop');
            if (backToTopBtn) {
                backToTopBtn.addEventListener('click', function() {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }

            // ============================================================
            // 9️⃣ SIDEBAR ACTIVE LINK
            // ============================================================
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('#sidebar nav a');

            function updateActiveLink() {
                let current = '';
                sections.forEach(section => {
                    const top = section.offsetTop - 120;
                    if (window.scrollY >= top) {
                        current = section.getAttribute('id');
                    }
                });
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + current) {
                        link.classList.add('active');
                    }
                });
            }
            window.addEventListener('scroll', updateActiveLink);
            window.addEventListener('load', updateActiveLink);

            // ============================================================
            // 9️⃣ SIDEBAR SMOOTH SCROLL
            // ============================================================
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });

            // ============================================================
            // 11️⃣ SOUND TOGGLE
            // ============================================================
            const soundBtn = document.getElementById('soundToggle');
            if (soundBtn) {
                let soundOn = false;
                soundBtn.addEventListener('click', function() {
                    soundOn = !soundOn;
                    this.innerHTML = soundOn ?
                        '<i class="fas fa-volume-up"></i>' :
                        '<i class="fas fa-volume-mute"></i>';
                });
            }

            // ============================================================
            // 11️⃣ QUOTE ROTATOR
            // ============================================================
            const quoteEl = document.getElementById('heroQuote');
            if (quoteEl) {
                const quotes = [
                    'إذا الشعب يوماً أراد الحياة...',
                    'الحرية لا تُمنح... بل تُنتزع.',
                    'وما ضاع حق وراءه مطالب.',
                    'الثورة ليست وليدة الصدفة... بل نتاج الإرادة.',
                    'من صنعوا الحرية... تركوا لنا وطناً نحميه.'
                ];
                let quoteIndex = 0;

                setInterval(() => {
                    quoteIndex = (quoteIndex + 1) % quotes.length;
                    quoteEl.innerHTML = '<i class="fas fa-quote-right"></i>' + quotes[quoteIndex];
                }, 5000);
            }

            // ============================================================
            // ⭐️⭐️⭐️ CINEMATIC ARCHIVE ENGINE ⭐️⭐️⭐️
            // ============================================================

            const archiveData = [
                {
                    id: 'AR-1954-01',
                    year: '1954',
                    date: '1 نوفمبر 1954',
                    title: 'اندلاع الثورة الجزائرية',
                    location: 'مناطق متفرقة · الجزائر',
                    image: './image/thawra.jpg',
                    summary: 'في ليلة الأول من نوفمبر، انطلقت شرارة الثورة عبر 30 عملية منسقة. أصدرت جبهة التحرير بياناً تاريخياً معلنة بداية الكفاح المسلح ضد الاستعمار الفرنسي.',
                    tags: ['الثورة', 'FLN', 'نوفمبر'],
                    quote: '"أيها الشعب الجزائري... لقد حان الوقت."',
                    category: 'انطلاقة الثورة'
                },
                {
                    id: 'AR-1955-01',
                    year: '1955',
                    date: '20 أوت 1955',
                    title: 'هجومات الشمال القسنطيني',
                    location: 'الشمال القسنطيني · الجزائر',
                    image: './image/houjoum.jpg',
                    summary: 'قاد زيغود يوسف هجومات 20 أوت التي وسعت نطاق الثورة وأجبرت فرنسا على الاعتراف بوجود ثورة حقيقية. شكلت نقلة نوعية في مسار الكفاح.',
                    tags: ['عسكري', 'قسنطينة', 'زيغود'],
                    quote: '"أيقظت هجومات 20 أوت العالم على حقيقة الجزائر."',
                    category: 'عملية عسكرية'
                },
                {
                    id: 'AR-1956-01',
                    year: '1956',
                    date: '20 أوت 1956',
                    title: 'مؤتمر الصومام',
                    location: 'منطقة الصومام · بجاية',
                    image: './image/somam.jpg',
                    summary: 'وضع مؤتمر الصومام الأسس السياسية والتنظيمية للثورة. أنشأ المجلس الوطني CNRA وقسم الجزائر إلى ست ولايات تاريخية تحت مبدأ القيادة الجماعية.',
                    tags: ['سياسي', 'القبائل', 'تنظيم'],
                    quote: '"الثورة ليست فوضى... بل تنظيم وإرادة." — عبان رمضان',
                    category: 'مؤتمر سياسي'
                },
                {
                    id: 'AR-1957-01',
                    year: '1957',
                    date: 'جانفي - أكتوبر 1957',
                    title: 'معركة الجزائر',
                    location: 'الجزائر العاصمة',
                    image: './image/maeraka.jpg',
                    summary: 'مواجهة شرسة داخل العاصمة بين الفدائيين والقوات الفرنسية. استشهد قادة كبار لكن المعركة كسبت تعاطفاً عالمياً وألهمت حركات التحرر.',
                    tags: ['حرب مدن', 'العاصمة', 'فدائيين'],
                    quote: '"إذا استشهدنا... فليعلم الجميع أننا لم نركع." — بن مهيدي',
                    category: 'حرب مدن'
                },
                {
                    id: 'AR-1958-01',
                    year: '1958',
                    date: '19 سبتمبر 1958',
                    title: 'تأسيس الحكومة المؤقتة GPRA',
                    location: 'القاهرة · مصر',
                    image: './image/houkouma.jpg',
                    summary: 'تأسست الحكومة المؤقتة للجمهورية الجزائرية كوجه سياسي ودبلوماسي للثورة. حصلت على اعتراف دولي واسع ومهدت للمفاوضات النهائية.',
                    tags: ['سياسي', 'دبلوماسية', 'GPRA'],
                    quote: '"الحكومة المؤقتة هي صوت الجزائر في العالم." — فرحات عباس',
                    category: 'تشكيل سياسي'
                },
                {
                    id: 'AR-1960-01',
                    year: '1960',
                    date: '11 ديسمبر 1960',
                    title: 'مظاهرات 11 ديسمبر',
                    location: 'الجزائر العاصمة ومدن أخرى',
                    image: './image/MOUDAHARA.jpg',
                    summary: 'خرج مئات الآلاف في مظاهرات سلمية حاشدة تأكيداً لدعم الثورة. واجهتهم الشرطة بالعنف لكن الرأي العام العالمي تحول لصالح القضية الجزائرية.',
                    tags: ['شعبي', 'مظاهرات', 'ديسمبر'],
                    quote: '"خرج الشعب ليقول كلمته... وسمع العالم صوته."',
                    category: 'انتفاضة شعبية'
                },
                {
                    id: 'AR-1961-01',
                    year: '1961',
                    date: 'ماي - جويلية 1961',
                    title: 'مفاوضات إيفيان الأولى',
                    location: 'إيفيان · فرنسا',
                    image: './image/IVIENE.jpg',
                    summary: 'بدأت المفاوضات الرسمية بين GPRA وفرنسا في إيفيان. نوقشت قضايا وقف النار وتقرير المصير رغم تعثرها مؤقتاً.',
                    tags: ['مفاوضات', 'فرنسا', 'إيفيان'],
                    quote: '"لا نفاوض من أجل الاستسلام... بل من أجل الحرية."',
                    category: 'مفاوضات'
                },
                {
                    id: 'AR-1962-01',
                    year: '1962',
                    date: '18 مارس - 5 جويلية 1962',
                    title: 'اتفاقيات إيفيان والاستقلال',
                    location: 'الجزائر',
                    image: './image/istiklal.jpg',
                    summary: 'تم توقيع اتفاقيات إيفيان لوقف النار وتنظيم استفتاء. في 5 جويلية 1962 أُعلن استقلال الجزائر بعد 132 سنة من الاستعمار.',
                    tags: ['استقلال', 'حرية', 'الجزائر'],
                    quote: '"اليوم... ولدت أمة." — أحمد بن بلة',
                    category: 'الاستقلال'
                }
            ];

            // State
            let currentIndex = 0;
            let isPlaying = true;
            let autoPlayInterval;
            const AUTO_PLAY_DELAY = 5000;

            // DOM Elements - تأكد من وجودها
            const cardWrapper = document.getElementById('cardWrapper');
            const timelineProgress = document.getElementById('timelineProgress');
            const timelineDot = document.getElementById('timelineDot');
            const timelineMarkers = document.getElementById('timelineMarkers');
            const quoteOverlay = document.getElementById('quoteOverlay');
            const yearNav = document.getElementById('yearNav');
            const btnPlay = document.getElementById('btnPlay');
            const playIcon = document.getElementById('playIcon');
            const particlesContainer = document.getElementById('particles');

            // تحقق من وجود جميع العناصر الأساسية
            if (!cardWrapper || !timelineProgress || !timelineDot || !timelineMarkers || !quoteOverlay || !yearNav || !btnPlay || !playIcon || !particlesContainer) {
                console.error('❌ Timeline elements not found. Make sure all IDs are correct.');
                console.log('Missing elements:', {
                    cardWrapper: !!cardWrapper,
                    timelineProgress: !!timelineProgress,
                    timelineDot: !!timelineDot,
                    timelineMarkers: !!timelineMarkers,
                    quoteOverlay: !!quoteOverlay,
                    yearNav: !!yearNav,
                    btnPlay: !!btnPlay,
                    playIcon: !!playIcon,
                    particlesContainer: !!particlesContainer
                });
                return;
            }

            // Create particles
            function createParticles() {
                const count = 30;
                for (let i = 0; i < count; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'particle';
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.animationDuration = (8 + Math.random() * 20) + 's';
                    particle.style.animationDelay = Math.random() * 15 + 's';
                    particle.style.width = (1 + Math.random() * 2) + 'px';
                    particle.style.height = particle.style.width;
                    particlesContainer.appendChild(particle);
                }
            }

            // Build all cards
            function buildCards() {
                cardWrapper.innerHTML = '';
                archiveData.forEach((data, index) => {
                    const card = document.createElement('div');
                    card.className = 'archive-card';
                    card.dataset.index = index;
                    card.innerHTML = `
                        <div class="card-header">
                            <div class="card-badge">
                                <span class="dot-indicator"></span>
                                ${data.category}
                            </div>
                            <div class="card-number">${data.id}</div>
                        </div>
                        <div class="card-body">
                            <div class="card-visual">
                                <img src="${data.image}" alt="${data.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/600x400/1a1a1a/B11226?text=${data.year}'">
                                <div class="image-overlay"></div>
                                <div class="image-stamp">ARCHIVE</div>
                            </div>
                            <div class="card-details">
                                <div class="card-year-large">${data.year}</div>
                                <div class="card-date">${data.date}</div>
                                <div class="card-title">${data.title}</div>
                                <div class="card-location">
                                    <i class="fas fa-map-marker-alt"></i> ${data.location}
                                </div>
                                <div class="card-summary">${data.summary}</div>
                                <div class="card-tags">
                                    ${data.tags.map(t => `<span class="card-tag">#${t}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                    `;
                    cardWrapper.appendChild(card);
                });
            }

            // Build timeline markers
            function buildTimelineMarkers() {
                timelineMarkers.innerHTML = '';
                archiveData.forEach((data, index) => {
                    const marker = document.createElement('span');
                    marker.className = 'timeline-marker';
                    marker.textContent = data.year;
                    marker.dataset.index = index;
                    marker.addEventListener('click', () => goTo(index));
                    timelineMarkers.appendChild(marker);
                });
            }

            // Build year navigation dots
            function buildYearNav() {
                yearNav.innerHTML = '';
                archiveData.forEach((data, index) => {
                    const dot = document.createElement('span');
                    dot.className = 'year-dot';
                    dot.dataset.index = index;
                    dot.addEventListener('click', () => goTo(index));
                    yearNav.appendChild(dot);
                });
            }

            // Update UI for current index
            function updateUI() {
                const total = archiveData.length;
                const progress = ((currentIndex + 1) / total) * 100;

                // Progress bar
                timelineProgress.style.width = progress + '%';
                timelineDot.style.right = (100 - progress) + '%';

                // Cards
                document.querySelectorAll('.archive-card').forEach((card, i) => {
                    card.classList.remove('active', 'exiting');
                    if (i === currentIndex) {
                        card.classList.add('active');
                    } else if (i === (currentIndex - 1 + total) % total) {
                        card.classList.add('exiting');
                    }
                });

                // Timeline markers
                document.querySelectorAll('.timeline-marker').forEach((marker, i) => {
                    marker.classList.toggle('active', i === currentIndex);
                });

                // Year nav dots
                document.querySelectorAll('.year-dot').forEach((dot, i) => {
                    dot.classList.toggle('active', i === currentIndex);
                });

                // Quote overlay
                quoteOverlay.textContent = archiveData[currentIndex].quote;
                quoteOverlay.style.opacity = '0';
                requestAnimationFrame(() => {
                    quoteOverlay.style.transition = 'opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
                    quoteOverlay.style.opacity = '0.12';
                });
            }

            // Go to specific archive
            function goTo(index) {
                if (index === currentIndex) return;
                currentIndex = index;
                updateUI();
                resetAutoPlay();
            }

            // Next archive
            function next() {
                currentIndex = (currentIndex + 1) % archiveData.length;
                updateUI();
                resetAutoPlay();
            }

            // Previous archive
            function prev() {
                currentIndex = (currentIndex - 1 + archiveData.length) % archiveData.length;
                updateUI();
                resetAutoPlay();
            }

            // Toggle autoplay
            function togglePlay() {
                isPlaying = !isPlaying;
                if (isPlaying) {
                    startAutoPlay();
                    playIcon.className = 'fas fa-pause';
                    btnPlay.classList.add('playing');
                } else {
                    stopAutoPlay();
                    playIcon.className = 'fas fa-play';
                    btnPlay.classList.remove('playing');
                }
            }

            // Auto play
            function startAutoPlay() {
                stopAutoPlay();
                if (isPlaying) {
                    autoPlayInterval = setInterval(next, AUTO_PLAY_DELAY);
                }
            }

            function stopAutoPlay() {
                if (autoPlayInterval) {
                    clearInterval(autoPlayInterval);
                    autoPlayInterval = null;
                }
            }

            function resetAutoPlay() {
                if (isPlaying) {
                    startAutoPlay();
                }
            }

            // Keyboard navigation
            function handleKeyboard(e) {
                if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    prev();
                } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    next();
                } else if (e.key === ' ') {
                    e.preventDefault();
                    togglePlay();
                }
            }

            // Touch swipe support
            let touchStartX = 0;
            let touchStartY = 0;

            function handleTouchStart(e) {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
            }

            function handleTouchEnd(e) {
                const dx = e.changedTouches[0].clientX - touchStartX;
                const dy = e.changedTouches[0].clientY - touchStartY;
                if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
                    if (dx > 0) prev();
                    else next();
                }
            }

            // Initialize archive engine
            function initArchiveEngine() {
                createParticles();
                buildCards();
                buildTimelineMarkers();
                buildYearNav();
                updateUI();
                startAutoPlay();

                // Event listeners
                document.getElementById('btnNext').addEventListener('click', next);
                document.getElementById('btnPrev').addEventListener('click', prev);
                btnPlay.addEventListener('click', togglePlay);
                document.addEventListener('keydown', handleKeyboard);
                cardWrapper.addEventListener('touchstart', handleTouchStart);
                cardWrapper.addEventListener('touchend', handleTouchEnd);

                // Hover pause
                cardWrapper.addEventListener('mouseenter', () => {
                    if (isPlaying) stopAutoPlay();
                });
                cardWrapper.addEventListener('mouseleave', () => {
                    if (isPlaying) startAutoPlay();
                });
            }

            // Start the archive engine
            initArchiveEngine();

            console.log('🇩🇿 Algerian Revolution Digital Museum · FINAL DESIGN BLUEPRINT V1.0');
            console.log('🎬 Cinematic Archive Engine Active');
            console.log('✨ Auto-playing documentary sequence with ' + archiveData.length + ' archives');
            console.log('📐 All systems operational');
        });


        // ============================================================
// ⭐️⭐️⭐️ HALL OF HEROES ENGINE ⭐️⭐️⭐️
// ============================================================

(function() {
    // Wait for DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHeroesEngine);
    } else {
        initHeroesEngine();
    }

    function initHeroesEngine() {
        // Check if heroes section exists
        const heroesSection = document.getElementById('heroes');
        if (!heroesSection) return;

        // ============================================================
        // HEROES DATA
        // ============================================================
        const heroesData = [
            {
                id: 'PF-001',
                name: 'أحمد بن بلة',
                nickname: 'أبو الاستقلال',
                role: 'أول رئيس للجزائر',
                category: 'political',
                image: './image/benbela.jpg',
                birth: '25 ديسمبر 1916',
                death: '11 أبريل 2012',
                birthPlace: 'مغنية، تلمسان',
                wilaya: 'الولاية الخامسة',
                bio: 'أحد القادة التاريخيين للثورة الجزائرية وأول رئيس للجمهورية الجزائرية المستقلة. كان عضواً مؤسساً في جبهة التحرير الوطني وقاد النضال من أجل الاستقلال.',
                contributions: [
                    'تأسيس جبهة التحرير الوطني',
                    'قيادة الثورة من الخارج',
                    'أول رئيس للجزائر المستقلة',
                    'تعزيز الوحدة الوطنية'
                ],
                honors: ['Founding Leader', 'President']
            },
            {
                id: 'PF-002',
                name: 'العربي بن مهيدي',
                nickname: 'أسطورة الثورة',
                role: 'قائد المنطقة الخامسة',
                category: 'martyrs',
                image: './image/larbi.jpg',
                birth: '1923',
                death: '4 مارس 1957',
                birthPlace: 'عين مليلة، أم البواقي',
                wilaya: 'الولاية الخامسة',
                bio: 'قائد ثوري وأحد أبرز شخصيات الثورة الجزائرية. قاد معركة الجزائر واشتهر بمقولته الشهيرة "ألقوا بالثورة إلى الشارع". استشهد تحت التعذيب.',
                contributions: [
                    'قيادة معركة الجزائر',
                    'تنظيم الشبكات الفدائية',
                    'تخطيط العمليات العسكرية',
                    'إلهام الأجيال'
                ],
                honors: ['Martyr', 'Military Commander']
            },
            {
                id: 'PF-003',
                name: 'مصطفى بن بولعيد',
                nickname: 'أسد الأوراس',
                role: 'قائد المنطقة الأولى',
                category: 'martyrs',
                image: './image/benboulaid.jpg',
                birth: '5 فبراير 1917',
                death: '22 مارس 1956',
                birthPlace: 'أريس، باتنة',
                wilaya: 'الولاية الأولى',
                bio: 'أحد القادة الستة الذين فجروا الثورة. قاد المنطقة الأولى (الأوراس) وكان له دور حاسم في انطلاق الكفاح المسلح. استشهد في انفجار لغم.',
                contributions: [
                    'تفجير الثورة في الأوراس',
                    'تسليح الثوار',
                    'تنظيم المنطقة الأولى',
                    'تجنيد المئات للثورة'
                ],
                honors: ['Martyr', 'Founding Leader']
            },
            {
                id: 'PF-004',
                name: 'ديدوش مراد',
                nickname: 'بطل الشمال',
                role: 'قائد المنطقة الثانية',
                category: 'martyrs',
                image: './image/didouche.jpg',
                birth: '13 يوليو 1927',
                death: '18 يناير 1955',
                birthPlace: 'الجزائر العاصمة',
                wilaya: 'الولاية الثانية',
                bio: 'من القادة الأوائل للثورة وأحد مفجريها. قاد المنطقة الثانية (الشمال القسنطيني) واستشهد في معركة مبكرة، لكنه ترك بصمة لا تُمحى.',
                contributions: [
                    'تنظيم المنطقة الثانية',
                    'التخطيط لهجومات 20 أوت',
                    'تأسيس خلايا الثورة',
                    'إلهام القادة الشباب'
                ],
                honors: ['Martyr', 'Founding Leader']
            },
            {
                id: 'PF-005',
                name: 'كريم بلقاسم',
                nickname: 'مهندس المفاوضات',
                role: 'وزير الخارجية GPRA',
                category: 'diplomats',
                image: './image/belkacem.jpg',
                birth: '14 ديسمبر 1922',
                death: '18 أكتوبر 1970',
                birthPlace: 'ذراع الميزان، تيزي وزو',
                wilaya: 'الولاية الثالثة',
                bio: 'قائد سياسي وعسكري بارز. قاد وفد جبهة التحرير في مفاوضات إيفيان التي أنهت الاستعمار الفرنسي. لعب دوراً حاسماً في تحقيق الاستقلال.',
                contributions: [
                    'قيادة مفاوضات إيفيان',
                    'توقيع اتفاقيات الاستقلال',
                    'تنظيم الجيش',
                    'تمثيل الثورة دولياً'
                ],
                honors: ['Diplomat', 'Military Commander']
            },
            {
                id: 'PF-006',
                name: 'جميلة بوحيرد',
                nickname: 'أيقونة النضال',
                role: 'فدائية ومناضلة',
                category: 'women',
                image: './image/bouhired.jpg',
                birth: '1935',
                death: '—',
                birthPlace: 'الجزائر العاصمة',
                wilaya: 'الولاية الرابعة',
                bio: 'مناضلة جزائرية أيقونية شاركت في معركة الجزائر. اعتقلتها القوات الفرنسية وحكم عليها بالإعدام قبل أن تطلق سراحها. رمز للمرأة الجزائرية المناضلة.',
                contributions: [
                    'المشاركة في معركة الجزائر',
                    'زرع القنابل في المناطق الفرنسية',
                    'رمز للمرأة المناضلة',
                    'إلهام النساء الجزائريات'
                ],
                honors: ['Women', 'Fedayeen']
            },
            {
                id: 'PF-007',
                name: 'زيغود يوسف',
                nickname: 'مهندس 20 أوت',
                role: 'قائد عسكري',
                category: 'martyrs',
                image: './image/zighoud.jpg',
                birth: '18 فبراير 1921',
                death: '23 سبتمبر 1956',
                birthPlace: 'سمندو، سكيكدة',
                wilaya: 'الولاية الثانية',
                bio: 'قائد ثوري عبقري خطط لهجومات 20 أوت 1955 التي غيرت مسار الثورة. استشهد في كمين نصبه الجيش الفرنسي.',
                contributions: [
                    'تخطيط هجومات 20 أوت',
                    'توسيع رقعة الثورة',
                    'تنظيم صفوف المجاهدين',
                    'إجبار فرنسا على الاعتراف بالثورة'
                ],
                honors: ['Martyr', 'Military Commander']
            },
            {
                id: 'PF-008',
                name: 'عبان رمضان',
                nickname: 'مهندس مؤتمر الصومام',
                role: 'قائد سياسي',
                category: 'political',
                image: './image/abane.jpg',
                birth: '10 يونيو 1920',
                death: '26 ديسمبر 1957',
                birthPlace: 'عزازقة، تيزي وزو',
                wilaya: 'الولاية الثالثة',
                bio: 'العقل المدبر السياسي للثورة. أشرف على تنظيم مؤتمر الصومام ووضع الأسس السياسية للثورة. اغتيل في ظروف غامضة.',
                contributions: [
                    'تنظيم مؤتمر الصومام',
                    'تأسيس CNRA',
                    'وضع مبادئ الثورة',
                    'تنظيم الهياكل السياسية'
                ],
                honors: ['Political Leader', 'Founding Leader']
            },
            {
                id: 'PF-009',
                name: 'هواري بومدين',
                nickname: 'باني الدولة',
                role: 'قائد الأركان',
                category: 'military',
                image: './image/boumediene.jpg',
                birth: '23 أغسطس 1932',
                death: '27 ديسمبر 1978',
                birthPlace: 'قالمة',
                wilaya: 'الولاية الثانية',
                bio: 'قائد أركان جيش التحرير الوطني. أصبح رئيساً للجزائر بعد الاستقلال وقاد عملية بناء الدولة الجزائرية الحديثة.',
                contributions: [
                    'قيادة أركان جيش التحرير',
                    'بناء الجيش الوطني',
                    'تحديث الجزائر',
                    'تعزيز السيادة الوطنية'
                ],
                honors: ['Military Commander', 'President']
            },
            {
                id: 'PF-010',
                name: 'حسيبة بن بوعلي',
                nickname: 'شهيدة القصبة',
                role: 'فدائية',
                category: 'women',
                image: './image/benbouali.jpg',
                birth: '18 يناير 1938',
                death: '9 أكتوبر 1957',
                birthPlace: 'الشلف',
                wilaya: 'الولاية الرابعة',
                bio: 'فدائية شابة شاركت في معركة الجزائر. استشهدت مع علي لابوانت وعمر ياسف في انفجار ملجأ القصبة.',
                contributions: [
                    'المشاركة في معركة الجزائر',
                    'نقل الرسائل والمتفجرات',
                    'رمز للتضحية',
                    'إلهام الشابات الجزائريات'
                ],
                honors: ['Martyr', 'Women', 'Fedayeen']
            },
            {
                id: 'PF-011',
                name: 'محمد بوضياف',
                nickname: 'رجل الثبات',
                role: 'قائد تاريخي',
                category: 'political',
                image: './image/boudiaf.jpg',
                birth: '23 يونيو 1919',
                death: '29 يونيو 1992',
                birthPlace: 'المسيلة',
                wilaya: 'الولاية الرابعة',
                bio: 'أحد القادة التاريخيين للثورة وعضو مجموعة الـ 22. عاد إلى الجزائر بعد غياب طويل ليصبح رئيساً للمجلس الأعلى للدولة.',
                contributions: [
                    'تأسيس جبهة التحرير',
                    'تنظيم الثورة من الخارج',
                    'رئاسة المجلس الأعلى للدولة',
                    'الدعوة للإصلاح'
                ],
                honors: ['Founding Leader', 'President']
            },
            {
                id: 'PF-012',
                name: 'رابح بيطاط',
                nickname: 'حكيم الثورة',
                role: 'قائد سياسي',
                category: 'political',
                image: './image/bitat.jpg',
                birth: '19 ديسمبر 1925',
                death: '10 أبريل 2000',
                birthPlace: 'عين الكرمة، قسنطينة',
                wilaya: 'الولاية الثانية',
                bio: 'أحد القادة الستة الذين فجروا الثورة. شغل مناصب سياسية هامة بعد الاستقلال وكان معروفاً بحكمته واتزانه.',
                contributions: [
                    'تفجير الثورة',
                    'تنظيم المنطقة الثانية',
                    'المساهمة في بناء الدولة',
                    'تعزيز الديمقراطية'
                ],
                honors: ['Founding Leader', 'Political Leader']
            },

             
            {
            
         id: 'PF-013',
        name: 'فرحات عباس',
        nickname: 'أول رئيس للحكومة المؤقتة',
        role: 'رئيس GPRA',
        category: 'political',
        image: './image/ferhatabbas.jpg',
        birth: '24 أكتوبر 1899',
        death: '24 ديسمبر 1985',
        birthPlace: 'الطاهير، جيجل',
        wilaya: 'الولاية الثانية',
        bio: 'زعيم سياسي بارز وأول رئيس للحكومة المؤقتة للجمهورية الجزائرية (GPRA). تحول من النضال السياسي السلمي إلى دعم الكفاح المسلح، ومثل الجزائر في المحافل الدولية.',
        contributions: [
            'تأسيس الاتحاد الديمقراطي للبيان الجزائري',
            'رئاسة الحكومة المؤقتة GPRA',
            'تمثيل الجزائر دولياً',
            'المساهمة في مفاوضات الاستقلال'
        ],
        honors: ['Political Leader', 'GPRA President']
    },
    {
        id: 'PF-014',
        name: 'علي لابوانت',
        nickname: 'أسطورة القصبة',
        role: 'قائد فدائي',
        category: 'martyrs',
        image: './image/alilapointe.jpg',
        birth: '14 مايو 1930',
        death: '9 أكتوبر 1957',
        birthPlace: 'مليانة، عين الدفلى',
        wilaya: 'الولاية الرابعة',
        bio: 'أحد أشهر الفدائيين في معركة الجزائر. تحول من حياة الجريمة إلى بطل قومي بعد انضمامه للثورة. استشهد مع حسيبة بن بوعلي في انفجار ملجأ القصبة بعد رفضه الاستسلام.',
        contributions: [
            'قيادة العمليات الفدائية في العاصمة',
            'تصفية الخونة والعملاء',
            'رمز للتضحية والفداء',
            'إلهام الشباب للانضمام للثورة'
        ],
        honors: ['Martyr', 'Fedayeen', 'Battle of Algiers']
    },
    {
        id: 'PF-015',
        name: 'عميروش آيت حمودة',
        nickname: 'أسطورة جرجرة',
        role: 'قائد الولاية الثالثة',
        category: 'martyrs',
        image: './image/amirouche.jpg',
        birth: '31 أكتوبر 1926',
        death: '29 مارس 1959',
        birthPlace: 'تاسافت أوقرمون، تيزي وزو',
        wilaya: 'الولاية الثالثة',
        bio: 'قائد عسكري أسطوري قاد الولاية الثالثة التاريخية. عُرف بانضباطه الصارم وشجاعته الفائقة. استشهد في كمين للجيش الفرنسي بعد معركة بطولية.',
        contributions: [
            'قيادة الولاية الثالثة',
            'تنظيم عمليات عسكرية كبرى',
            'توحيد صفوف المجاهدين',
            'تطوير تكتيكات حرب العصابات'
        ],
        honors: ['Martyr', 'Military Commander', 'Wilaya III']
    },
    {
        id: 'PF-016',
        name: 'العقيد لطفي',
        nickname: 'قائد الولاية الخامسة',
        role: 'قائد عسكري',
        category: 'martyrs',
        image: './image/colonellotfi.jpg',
        birth: '1934',
        death: '27 مارس 1960',
        birthPlace: 'تلمسان',
        wilaya: 'الولاية الخامسة',
        bio: 'قائد شاب تولى قيادة الولاية الخامسة وهو في سن مبكرة. عُرف بخططه العسكرية العبقرية وشجاعته النادرة. استشهد في معركة غير متكافئة مع قوات العدو.',
        contributions: [
            'قيادة الولاية الخامسة',
            'تطوير الخطط العسكرية',
            'توحيد القبائل للثورة',
            'قيادة معارك كبرى'
        ],
        honors: ['Martyr', 'Military Commander', 'Wilaya V']
    },
    {
        id: 'PF-017',
        name: 'مريم بوعتورة',
        nickname: 'وردة الأوراس',
        role: 'مناضلة وممرضة',
        category: 'women',
        image: './image/maryambouattoura.jpg',
        birth: '1938',
        death: '1960',
        birthPlace: 'خنشلة',
        wilaya: 'الولاية الأولى',
        bio: 'مناضلة شابة انضمت للثورة كممرضة ومسبلة. قامت بنقل الأسلحة والرسائل بين الجبال. استشهدت تحت التعذيب بعد رفضها البوح بأسرار الثورة.',
        contributions: [
            'تمريض الجرحى في الجبال',
            'نقل الأسلحة والمؤن',
            'جمع المعلومات الاستخباراتية',
            'رمز للمرأة المجاهدة في الأوراس'
        ],
        honors: ['Martyr', 'Women', 'Wilaya I']
    },
    {
        id: 'PF-018',
        name: 'أحمد زبانة',
        nickname: 'أول شهيد بالمقصلة',
        role: 'قائد عسكري',
        category: 'martyrs',
        image: './image/ahmedzabana.jpg',
        birth: '1926',
        death: '19 يونيو 1956',
        birthPlace: 'زحلة، وهران',
        wilaya: 'الولاية الخامسة',
        bio: 'أول شهيد جزائري يُعدم بالمقصلة من قبل الاستعمار الفرنسي. شارك في العمليات الأولى للثورة وألهم إعدامه آلاف الجزائريين للانضمام للكفاح المسلح.',
        contributions: [
            'المشاركة في العمليات الأولى للثورة',
            'أول من أعدم بالمقصلة',
            'رمز للتضحية والصمود',
            'إلهام المجندين الجدد'
        ],
        honors: ['Martyr', 'First Guillotined', 'Symbol of Resistance']
    },
    {
        id: 'PF-019',
        name: 'مالك بن نبي',
        nickname: 'فيلسوف الثورة',
        role: 'مفكر ومصلح',
        category: 'political',
        image: './image/malekbennabi.jpg',
        birth: '1 يناير 1905',
        death: '31 أكتوبر 1973',
        birthPlace: 'قسنطينة',
        wilaya: 'الولاية الثانية',
        bio: 'مفكر جزائري كبير ومهندس النهضة الفكرية للثورة. وضع أسس "القابلية للاستعمار" و"شروط النهضة". أثر فكره في قادة الثورة ومثقفي العالم الإسلامي.',
        contributions: [
            'تأسيس الفكر النهضوي الجزائري',
            'تأليف "شروط النهضة"',
            'توعية الأجيال',
            'محاربة الفكر الاستعماري'
        ],
        honors: ['Intellectual', 'Philosopher', 'Writer']
    },
    {
        id: 'PF-020',
        name: 'سي الحواس',
        nickname: 'أسد الأوراس',
        role: 'قائد الولاية الأولى',
        category: 'martyrs',
        image: './image/sihawas.jpg',
        birth: '1923',
        death: '28 مارس 1959',
        birthPlace: 'باتنة',
        wilaya: 'الولاية الأولى',
        bio: 'قائد عسكري فذ تولى قيادة الولاية الأولى بعد استشهاد مصطفى بن بولعيد. قاد معارك ضارية في جبال الأوراس وأذاق القوات الفرنسية هزائم متتالية.',
        contributions: [
            'قيادة الولاية الأولى',
            'إعادة تنظيم المنطقة بعد استشهاد بن بولعيد',
            'قيادة معارك الأوراس',
            'توسيع نطاق العمليات العسكرية'
        ],
        honors: ['Martyr', 'Military Commander', 'Wilaya I']
    },
    {
        id: 'PF-021',
        name: 'الشاذلي بن جديد',
        nickname: 'باني الجزائر الحديثة',
        role: 'قائد عسكري وسياسي',
        category: 'military',
        image: './image/chadlibendjedid.jpg',
        birth: '14 أبريل 1929',
        death: '6 أكتوبر 2012',
        birthPlace: 'سبعة، الطارف',
        wilaya: 'الولاية الثانية',
        bio: 'قائد عسكري في جيش التحرير ثم رئيس للجزائر من 1979 إلى 1992. قاد عملية بناء المؤسسات وتطوير الاقتصاد الوطني بعد الاستقلال.',
        contributions: [
            'قيادة وحدات جيش التحرير',
            'المساهمة في بناء الجيش الوطني',
            'تطوير الاقتصاد الجزائري',
            'تعزيز الوحدة الوطنية'
        ],
        honors: ['Military Commander', 'President', 'State Builder']
    },
    {
        id: 'PF-022',
        name: 'عبد الحفيظ بوصوف',
        nickname: 'أبو المخابرات الجزائرية',
        role: 'قائد جهاز المخابرات',
        category: 'military',
        image: './image/boussouf.jpg',
        birth: '17 أغسطس 1926',
        death: '31 ديسمبر 1980',
        birthPlace: 'ميلة',
        wilaya: 'الولاية الثانية',
        bio: 'مؤسس جهاز المخابرات الجزائرية أثناء الثورة. بنى شبكة استخباراتية قوية ساعدت في حماية الثورة وتوجيه عملياتها. عُرف بذكائه الحاد وصرامته.',
        contributions: [
            'تأسيس جهاز المخابرات',
            'بناء شبكات التجسس',
            'حماية قادة الثورة',
            'تأمين الاتصالات والتموين'
        ],
        honors: ['Intelligence Chief', 'Military Commander', 'Security Founder']
    },
    {
        id: 'PF-023',
        name: 'فاطمة نسومر',
        nickname: 'لالة فاطمة',
        role: 'مقاومة وصوفية',
        category: 'women',
        image: './image/fatmansoumer.jpg',
        birth: '1830',
        death: '1863',
        birthPlace: 'عين الحمام، تيزي وزو',
        wilaya: 'الولاية الثالثة',
        bio: 'قائدة مقاومة جزائرية ضد الاحتلال الفرنسي في القرن التاسع عشر. قادت ثوار جرجرة وألهمت النساء للمشاركة في المقاومة. رمز للصمود النسائي الجزائري.',
        contributions: [
            'قيادة مقاومة جرجرة',
            'توحيد القبائل ضد الاحتلال',
            'رمز للمرأة الجزائرية المقاومة',
            'إلهام الأجيال اللاحقة'
        ],
        honors: ['Resistance Leader', 'Women', 'Symbol of Kabylia']
    },
    {
        id: 'PF-024',
        name: 'العربي التبسي',
        nickname: 'شيخ الشهداء',
        role: 'عالم دين ومجاهد',
        category: 'martyrs',
        image: './image/tebessi.jpg',
        birth: '1891',
        death: '1957',
        birthPlace: 'تبسة',
        wilaya: 'الولاية الأولى',
        bio: 'عالم دين جزائري بارز وأحد مؤسسي جمعية العلماء المسلمين. ناضل ضد السياسة الاستعمارية ودعم الثورة. اختطفته السلطات الفرنسية وقتلته.',
        contributions: [
            'تأسيس جمعية العلماء المسلمين',
            'محاربة الأمية',
            'دعم الثورة بالفتاوى',
            'الحفاظ على الهوية الإسلامية'
        ],
        honors: ['Martyr', 'Scholar', 'Religious Leader']
    },
    {
        id: 'PF-025',
        name: 'موريس أودان',
        nickname: 'شهيد الحقيقة',
        role: 'رياضي ومناضل',
        category: 'martyrs',
        image: './image/mauriceaudin.jpg',
        birth: '14 فبراير 1932',
        death: '21 يونيو 1957',
        birthPlace: 'باجة، تونس',
        wilaya: 'الولاية الرابعة',
        bio: 'رياضياتي فرنسي من أصول يهودية انحاز للقضية الجزائرية. اختطف وعذب حتى الموت على يد الجيش الفرنسي. اعترفت فرنسا بمسؤوليتها عن مقتله عام 2018.',
        contributions: [
            'دعم القضية الجزائرية',
            'فضح جرائم التعذيب',
            'رمز للتضامن الإنساني',
            'شهادة على وحشية الاستعمار'
        ],
        honors: ['Martyr', 'Activist', 'Symbol of Justice']
    },
    
    
        ];

        // ============================================================
        // STATE
        // ============================================================
        let currentFilter = 'all';
        let currentSearch = '';
        let currentPage = 0;
        let expandedCardId = null;
        let itemsPerPage = 6;

        // ============================================================
        // DOM ELEMENTS
        // ============================================================
        const track = document.getElementById('heroesTrack');
        const searchInput = document.getElementById('heroesSearch');
        const filterButtons = document.querySelectorAll('.heroes-filter-btn');
        const prevBtn = document.getElementById('heroesPrev');
        const nextBtn = document.getElementById('heroesNext');
        const emptyState = document.getElementById('heroesEmptyState');
        const viewport = document.getElementById('heroesViewport');

        if (!track || !searchInput || !prevBtn || !nextBtn || !emptyState) {
            console.error('Heroes: Some DOM elements not found');
            return;
        }

        // ============================================================
        // RESPONSIVE ITEMS PER PAGE
        // ============================================================
        function updateItemsPerPage() {
            const width = window.innerWidth;
            if (width <= 480) itemsPerPage = 2;
            else if (width <= 768) itemsPerPage = 3;
            else if (width <= 992) itemsPerPage = 4;
            else if (width <= 1200) itemsPerPage = 5;
            else itemsPerPage = 6;
        }
        updateItemsPerPage();
        window.addEventListener('resize', () => {
            updateItemsPerPage();
            renderCards();
        });

        // ============================================================
        // FILTER HEROES
        // ============================================================
        function getFilteredHeroes() {
            return heroesData.filter(hero => {
                // Category filter
                if (currentFilter !== 'all' && hero.category !== currentFilter) return false;
                
                // Search filter
                if (currentSearch) {
                    const searchLower = currentSearch.toLowerCase();
                    const nameMatch = hero.name.toLowerCase().includes(searchLower);
                    const roleMatch = hero.role.toLowerCase().includes(searchLower);
                    const nicknameMatch = hero.nickname && hero.nickname.toLowerCase().includes(searchLower);
                    if (!nameMatch && !roleMatch && !nicknameMatch) return false;
                }
                
                return true;
            });
        }

        // ============================================================
        // HIGHLIGHT SEARCH MATCH
        // ============================================================
        function highlightText(text, search) {
            if (!search) return text;
            const regex = new RegExp(`(${search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
            return text.replace(regex, '<span class="heroes-search-highlight">$1</span>');
        }

        // ============================================================
        // BUILD CARD HTML
        // ============================================================
        function buildCardHTML(hero, isExpanded) {
            return `
                <div class="hero-card ${isExpanded ? 'expanded' : ''}" data-id="${hero.id}" data-category="${hero.category}">
                    <div class="hero-card-image">
                        <img src="${hero.image}" alt="${hero.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x500/1a1a1a/B11226?text=${encodeURIComponent(hero.name)}'">
                        <div class="hero-card-image-overlay"></div>
                    </div>
                    <div class="hero-card-info">
                        <div class="hero-card-name">${highlightText(hero.name, currentSearch)}</div>
                        <div class="hero-card-role">${highlightText(hero.role, currentSearch)}</div>
                    </div>
                    <div class="hero-card-expanded-content">
                        <div class="expanded-archive-header">
                            <span class="archive-status">◆ DECLASSIFIED ◆</span>
                            <span class="archive-file-no">FILE No. ${hero.id}</span>
                        </div>
                        <div class="expanded-name">${hero.name}</div>
                        ${hero.nickname ? `<div class="expanded-nickname">"${hero.nickname}"</div>` : ''}
                        
                        <div class="expanded-detail-row">
                            <span class="expanded-detail-label">Birth</span>
                            <span class="expanded-detail-value">${hero.birth}</span>
                        </div>
                        <div class="expanded-detail-row">
                            <span class="expanded-detail-label">Death</span>
                            <span class="expanded-detail-value">${hero.death}</span>
                        </div>
                        <div class="expanded-detail-row">
                            <span class="expanded-detail-label">Place of Birth</span>
                            <span class="expanded-detail-value">${hero.birthPlace}</span>
                        </div>
                        <div class="expanded-detail-row">
                            <span class="expanded-detail-label">Historical Wilaya</span>
                            <span class="expanded-detail-value">${hero.wilaya}</span>
                        </div>
                        <div class="expanded-detail-row">
                            <span class="expanded-detail-label">Role</span>
                            <span class="expanded-detail-value">${hero.role}</span>
                        </div>
                        
                        <div class="expanded-bio">${hero.bio}</div>
                        
                        <div class="expanded-contributions">
                            <div class="expanded-contributions-title">Main Contributions</div>
                            <ul class="expanded-contributions-list">
                                ${hero.contributions.map(c => `<li><i class="fas fa-star"></i>${c}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="expanded-honors">
                            ${hero.honors.map(h => `<span class="expanded-honor-badge">✦ ${h}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        // ============================================================
        // RENDER CARDS
        // ============================================================
        function renderCards() {
            const filtered = getFilteredHeroes();
            
            if (filtered.length === 0) {
                track.innerHTML = '';
                emptyState.style.display = 'block';
                prevBtn.style.opacity = '0.4';
                nextBtn.style.opacity = '0.4';
                return;
            }
            
            emptyState.style.display = 'none';
            
            const totalPages = Math.ceil(filtered.length / itemsPerPage);
            if (currentPage >= totalPages) currentPage = totalPages - 1;
            if (currentPage < 0) currentPage = 0;
            
            const startIndex = currentPage * itemsPerPage;
            const endIndex = Math.min(startIndex + itemsPerPage, filtered.length);
            const pageItems = filtered.slice(startIndex, endIndex);
            
            track.innerHTML = '';
            
            pageItems.forEach(hero => {
                const isExpanded = (expandedCardId === hero.id);
                track.innerHTML += buildCardHTML(hero, isExpanded);
            });
            
            // Update arrow states
            prevBtn.style.opacity = currentPage === 0 ? '0.4' : '1';
            nextBtn.style.opacity = currentPage >= totalPages - 1 ? '0.4' : '1';
            
            // Add click events
            attachCardEvents();
        }

        // ============================================================
        // ATTACH CARD EVENTS
        // ============================================================
        function attachCardEvents() {
            const cards = track.querySelectorAll('.hero-card');
            cards.forEach(card => {
                card.addEventListener('click', function(e) {
                    const heroId = this.dataset.id;
                    
                    if (expandedCardId === heroId) {
                        // Close expanded card
                        expandedCardId = null;
                    } else {
                        // Open this card
                        expandedCardId = heroId;
                    }
                    
                    renderCards();
                });
            });
        }

        // ============================================================
        // NAVIGATION
        // ============================================================
        function goToPage(page) {
            const filtered = getFilteredHeroes();
            const totalPages = Math.ceil(filtered.length / itemsPerPage);
            if (page < 0 || page >= totalPages) return;
            currentPage = page;
            expandedCardId = null;
            renderCards();
            
            // Smooth scroll track
            track.style.transform = 'translateX(0)';
        }

        function nextPage() {
            const filtered = getFilteredHeroes();
            const totalPages = Math.ceil(filtered.length / itemsPerPage);
            if (currentPage < totalPages - 1) {
                goToPage(currentPage + 1);
            }
        }

        function prevPage() {
            if (currentPage > 0) {
                goToPage(currentPage - 1);
            }
        }

        // ============================================================
        // EVENT LISTENERS
        // ============================================================
        
        // Navigation arrows
        nextBtn.addEventListener('click', nextPage);
        prevBtn.addEventListener('click', prevPage);

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            // Only if heroes section is in view
            const heroesSection = document.getElementById('heroes');
            if (!heroesSection) return;
            const rect = heroesSection.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            if (!isInView) return;
            
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                nextPage();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                prevPage();
            }
        });

        // Search input
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                currentSearch = this.value.trim();
                currentPage = 0;
                expandedCardId = null;
                renderCards();
            }, 300);
        });

        // Filter buttons
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                filterButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentFilter = this.dataset.filter;
                currentPage = 0;
                expandedCardId = null;
                renderCards();
            });
        });

        // Close expanded card when pressing Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && expandedCardId) {
                expandedCardId = null;
                renderCards();
            }
        });

        // Initial render
        renderCards();

        console.log('🏛️ Hall of Heroes Engine Active');
        console.log('👥 ' + heroesData.length + ' heroes loaded');
        console.log('📁 Archive cards ready');
    }
})();

// ============================================================
// COLONIAL CRIMES — EVIDENCE BOARD (FINAL NO OVERLAP)
// ============================================================
(function(){
    document.addEventListener('DOMContentLoaded', function(){
        if(!document.getElementById('crimes')) return;

        const crimes = [
            { id:'C1', caseNo:'CASE 001', name:'مجازر 8 ماي 1945', date:'8 مايو 1945', location:'سطيف، قالمة، خراطة',
              desc:'مجازر جماعية ضد مدنيين عزل، استخدمت فيها الأسلحة الثقيلة والطائرات.', victims:'45,000+', consequences:'إعدامات جماعية واعتقالات', classification:'Massacre' },
            { id:'C2', caseNo:'CASE 002', name:'التعذيب المنهجي', date:'1954 - 1962', location:'كامل التراب الجزائري',
              desc:'استخدام ممنهج للتعذيب شمل الصعق الكهربائي والإغراق.', victims:'غير معروف', consequences:'ندوب نفسية وجسدية دائمة', classification:'Torture' },
            { id:'C3', caseNo:'CASE 003', name:'المحتشدات الجماعية', date:'1954 - 1962', location:'أكثر من 2000 محتشد',
              desc:'احتجز ملايين الجزائريين في معسكرات غير إنسانية.', victims:'2,000,000+', consequences:'تهجير قسري وتدمير القرى', classification:'Forced Displacement' },
            { id:'C4', caseNo:'CASE 004', name:'الاختفاء القسري', date:'1954 - 1962', location:'كامل التراب',
              desc:'اختفاء آلاف المعتقلين دون محاكمة.', victims:'11,000+', consequences:'معاناة العائلات', classification:'Enforced Disappearance' },
            { id:'C5', caseNo:'CASE 005', name:'التهجير القسري', date:'1954 - 1962', location:'الأرياف الجزائرية',
              desc:'سياسة الأرض المحروقة وترحيل السكان من مناطق كاملة.', victims:'3,525,000', consequences:'تدمير 8000 قرية', classification:'Forced Displacement' },
            { id:'C6', caseNo:'CASE 006', name:'قمع مظاهرات 17 أكتوبر', date:'17 أكتوبر 1961', location:'باريس',
              desc:'قمع دموي لمظاهرة سلمية للجزائريين في باريس.', victims:'200-300', consequences:'صدمة دولية', classification:'Massacre' },
            { id:'C7', caseNo:'CASE 007', name:'التجارب النووية', date:'1960 - 1966', location:'رقان، الصحراء',
              desc:'17 تجربة نووية فرنسية خلفت تلوثاً إشعاعياً دائماً.', victims:'آلاف المتضررين', consequences:'أمراض سرطانية وتشوهات', classification:'Nuclear Crime' },
            { id:'C8', caseNo:'CASE 008', name:'حرق القرى والمزارع', date:'1954 - 1962', location:'الأرياف',
              desc:'إحراق المحاصيل وتدمير الماشية لتجويع السكان.', victims:'ملايين الفلاحين', consequences:'مجاعات ونزوح', classification:'Scorched Earth' },
            { id:'C9', caseNo:'CASE 009', name:'طمس الهوية', date:'1830 - 1962', location:'كامل الجزائر',
              desc:'منع اللغة العربية وإغلاق المدارس وتحويل المساجد.', victims:'الشعب الجزائري', consequences:'تراجع التعليم', classification:'Cultural Genocide' },
            { id:'C10', caseNo:'CASE 010', name:'الأسلحة المحرمة', date:'1954 - 1962', location:'الجبال',
              desc:'استخدام النابالم والفسفور الأبيض ضد المدنيين.', victims:'آلاف المدنيين', consequences:'حروق دائمة', classification:'War Crime' }
        ];

        // Manually defined positions with large spacing (percentages inside board)
        // Board has padding 50px top/bottom, 40px left/right, so we can safely use margins
        const positions = [
            { top: 4, left: 4, rot: -1.5 },
            { top: 4, left: 28, rot: 1 },
            { top: 4, left: 52, rot: -2 },
            { top: 4, left: 76, rot: 1.5 },
            { top: 38, left: 4, rot: 2 },
            { top: 38, left: 28, rot: -1.5 },
            { top: 38, left: 52, rot: 1 },
            { top: 38, left: 76, rot: -2 },
            { top: 72, left: 18, rot: -1 },
            { top: 72, left: 52, rot: 2 }
        ];

        const board = document.getElementById('evidenceBoard');
        const layer = document.getElementById('cardsLayer');

        // Build cards
        function buildCards() {
            layer.innerHTML = '';
            crimes.forEach((c, i) => {
                if(i >= positions.length) return;
                const p = positions[i];
                const wrapper = document.createElement('div');
                wrapper.className = 'crime-wrapper';
                wrapper.style.top = p.top + '%';
                wrapper.style.left = p.left + '%';
                wrapper.style.transform = `rotate(${p.rot}deg)`;
                wrapper.style.animationDelay = (i * 0.06) + 's';
                wrapper.dataset.id = c.id;

                wrapper.innerHTML = `
                    <div class="crime-card">
                        <div class="case-no">${c.caseNo}</div>
                        <div class="crime-name">${c.name}</div>
                        <div class="crime-date">${c.date}</div>
                        <span class="stamp">DECLASSIFIED</span>
                    </div>
                    <div class="info-card">
                        <div class="info-title">${c.name}</div>
                        <div class="info-date">${c.date}</div>
                        <div class="info-location"><i class="fas fa-map-marker-alt"></i> ${c.location}</div>
                        <div class="info-desc">${c.desc}</div>
                        <div class="info-stat"><span class="label">VICTIMS</span><span class="value red">${c.victims}</span></div>
                        <div class="info-stat"><span class="label">CONSEQUENCES</span><span class="value">${c.consequences}</span></div>
                        <span class="classification">◆ ${c.classification}</span>
                    </div>
                `;
                layer.appendChild(wrapper);
            });
        }

        // Attach hover / tap events
        function attachEvents() {
            const wrappers = layer.querySelectorAll('.crime-wrapper');
            wrappers.forEach(w => {
                w.addEventListener('mouseenter', () => {
                    if(window.innerWidth <= 768) return;
                    w.classList.add('revealed');
                });
                w.addEventListener('mouseleave', () => {
                    if(window.innerWidth <= 768) return;
                    w.classList.remove('revealed');
                });
                w.addEventListener('click', () => {
                    if(window.innerWidth > 768) return;
                    if(w.classList.contains('tapped')){
                        w.classList.remove('tapped');
                    } else {
                        wrappers.forEach(ww => ww.classList.remove('tapped'));
                        w.classList.add('tapped');
                    }
                });
            });
        }

        // Responsive handling
        window.addEventListener('resize', () => {
            if(window.innerWidth <= 768) {
                layer.querySelectorAll('.crime-wrapper').forEach(w => w.style.transform = 'none');
            } else {
                layer.querySelectorAll('.crime-wrapper').forEach((w, i) => {
                    if(i < positions.length) {
                        w.style.top = positions[i].top + '%';
                        w.style.left = positions[i].left + '%';
                        w.style.transform = `rotate(${positions[i].rot}deg)`;
                    }
                });
            }
        });

        // Init
        buildCards();
        attachEvents();

        console.log('🔴 Evidence Board ready – no overlap, no lines');
    });
})();