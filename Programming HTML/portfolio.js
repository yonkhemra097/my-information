      /* =====================================================================
   CONFIG — edit your personal data here
   ===================================================================== */
      const CONFIG = {
        name: "YONKHEMRA",
        brand: "Yonkhemra.dev",
        email: "yonkhemra097@gmail.com",
        socials: {
          github: { url: "https://github.com/", handle: "@yonkhemra" },
          instagram: {
            url: "https://www.instagram.com/yonkhemra0?dlrf=MXVrcDU4dG9pcWFzOA%3D%3D&utm_source=qr",
            handle: "@yonkhemra0",
          },
          tiktok: {
            url: "https://www.tiktok.com/@chou1vs53?_r=1&_t=ZS-9BE7lTtavsi",
            handle: "@chou1vs53",
          },
          facebook: {
            url: "https://www.facebook.com/share/1C9ykzUYDB/?mibextid=wwXIfr",
            handle: "@YoNkHeMrA",
          },
          telegram: {
            url: "https://t.me/YONKHEMRA",
            handle: "@YONKHEMRA",
          },
        },
        education: [
          {
            icon: "cap",
            title: "Information Technology",
            sub: {
              en: "Year 4 · Generation 27",
              km: "ឆ្នាំទី ៤ · ជំនាន់ទី ២៧",
            },
            date: {
              en: "Web Backend Development",
              km: "មុខវិជ្ជា Web Backend Development",
            },
          },
          {
            icon: "code",
            title: "Laravel Coursework",
            sub: {
              en: "Migrations, Eloquent, REST API, Sanctum",
              km: "Migrations, Eloquent, REST API, Sanctum",
            },
            date: { en: "Windows · XAMPP", km: "Windows · XAMPP" },
          },
        ],
        experience: [
          {
            icon: "brief",
            title: { en: "Independent Developer", km: "អ្នកអភិវឌ្ឍឯករាជ្យ" },
            sub: {
              en: "Business management systems",
              km: "ប្រព័ន្ធគ្រប់គ្រងអាជីវកម្ម",
            },
            date: {
              en: "Library · Shop · Market · Water · Rooms",
              km: "បណ្ណាល័យ · ហាង · ផ្សារ · ទឹក · បន្ទប់",
            },
          },
        ],
        projects: [
          {
            id: "khemra-library",
            title: "KheMRa KH Library",
            icon: "book",
            color: ["#1d4ed8", "#0b1b4d"],
            desc: {
              en: "A full Laravel 11 library management system built as my final course project, with a Khmer-language interface, QR-powered borrowing and an API for mobile use.",
              km: "ប្រព័ន្ធគ្រប់គ្រងបណ្ណាល័យពេញលេញដោយ Laravel 11 ជាគម្រោងចុងក្រោយនៃមុខវិជ្ជា មានចំណុចប្រទាក់ភាសាខ្មែរ ការខ្ចីដោយ QR និង API សម្រាប់ទូរស័ព្ទ។",
            },
            tech: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML5", "CSS3"],
            features: {
              en: [
                "Dual authentication guards",
                "CRUD for books, categories, members and borrowings",
                "AJAX borrow modal with QR code",
                "RESTful API with Laravel Sanctum",
                "Fine calculation and Khmer-language interface",
              ],
              km: [
                "Dual authentication guards",
                "CRUD សម្រាប់សៀវភៅ ប្រភេទ សមាជិក និងការខ្ចី",
                "AJAX borrow modal ជាមួយ QR code",
                "RESTful API ជាមួយ Laravel Sanctum",
                "ការគណនាប្រាក់ពិន័យ និងចំណុចប្រទាក់ភាសាខ្មែរ",
              ],
            },
          },
          {
            id: "khemra-shop",
            title: "KHEMRA KH Shop",
            icon: "cart",
            color: ["#7c3aed", "#1e0b4d"],
            desc: {
              en: "A Khmer-language e-commerce app in a single HTML file with a Firebase backend, a multi-step order flow and role-based access for admins, users and drivers.",
              km: "កម្មវិធីអ៊ីខមមើសភាសាខ្មែរក្នុងឯកសារ HTML តែមួយ ជាមួយ Firebase ដំណើរការបញ្ជាទិញច្រើនជំហាន និងសិទ្ធិតាមតួនាទី admin, user និង driver។",
            },
            tech: ["HTML5", "CSS3", "JavaScript", "Firebase"],
            features: {
              en: [
                "Order flow: confirm, delivery, QR payment, proof upload, receipt",
                "Leaflet.js map for delivery location",
                "Chart.js dashboard",
                "Admin panels for stock, accounts and orders",
                "CSV export and real-time chat",
              ],
              km: [
                "ដំណើរការបញ្ជាទិញ៖ បញ្ជាក់ ដឹកជញ្ជូន បង់ប្រាក់ QR ផ្ទុកភស្តុតាង បង្កាន់ដៃ",
                "ផែនទី Leaflet.js សម្រាប់ទីតាំងដឹកជញ្ជូន",
                "ផ្ទាំង Chart.js",
                "ផ្ទាំង admin សម្រាប់ស្តុក គណនី និងការបញ្ជាទិញ",
                "នាំចេញ CSV និងជជែកផ្ទាល់",
              ],
            },
          },
          {
            id: "khemra-market",
            title: "KheMRa Market",
            icon: "store",
            color: ["#059669", "#042f23"],
            desc: {
              en: "A multi-role supermarket management system for admins, sellers, drivers and customers, with KHQR payment, live notifications and bilingual Khmer/English support.",
              km: "ប្រព័ន្ធគ្រប់គ្រងផ្សារទំនើបច្រើនតួនាទី សម្រាប់ admin អ្នកលក់ អ្នកដឹក និងអតិថិជន ជាមួយការបង់ប្រាក់ KHQR ការជូនដំណឹងផ្ទាល់ និងភាសាខ្មែរ/អង់គ្លេស។",
            },
            tech: ["HTML5", "JavaScript", "PHP", "Laravel", "Firebase"],
            features: {
              en: [
                "Admin, Seller, Driver and Customer roles",
                "KHQR payment with admin notification",
                "Order lifecycle and inventory management",
                "Chart.js revenue charts",
                "Microservices version (Auth, Product, Order, Payment, Delivery, Notify)",
              ],
              km: [
                "តួនាទី Admin, Seller, Driver និង Customer",
                "ការបង់ប្រាក់ KHQR ជាមួយការជូនដំណឹងដល់ admin",
                "ការគ្រប់គ្រងវដ្តបញ្ជាទិញ និងស្តុក",
                "ក្រាហ្វចំណូល Chart.js",
                "កំណែ Microservices (Auth, Product, Order, Payment, Delivery, Notify)",
              ],
            },
          },
          {
            id: "pure-water",
            title: "Pure Water Supply",
            icon: "drop",
            color: ["#0891b2", "#052f3d"],
            desc: {
              en: "A Khmer-language management system for a water distribution business, with role-based dashboards, stock control, KHQR payments and Firebase Realtime Database.",
              km: "ប្រព័ន្ធគ្រប់គ្រងភាសាខ្មែរសម្រាប់អាជីវកម្មចែកចាយទឹកស្អាត មានផ្ទាំងតាមតួនាទី ការគ្រប់គ្រងស្តុក ការបង់ប្រាក់ KHQR និង Firebase Realtime Database។",
            },
            tech: [
              "HTML5",
              "CSS3",
              "JavaScript",
              "Firebase",
              "Flutter",
              "Dart",
            ],
            features: {
              en: [
                "Dashboards for admin, manager and seller",
                "Seller entry forms and stock management",
                "KHQR payment flow",
                "7-day history with auto-pruning and CSV export",
                "Multi-theme design with dark mode",
              ],
              km: [
                "ផ្ទាំងសម្រាប់ admin manager និង seller",
                "ទម្រង់បញ្ចូលរបស់អ្នកលក់ និងការគ្រប់គ្រងស្តុក",
                "ដំណើរការបង់ប្រាក់ KHQR",
                "ប្រវត្តិ ៧ ថ្ងៃ លុបស្វ័យប្រវត្តិ និងនាំចេញ CSV",
                "រចនាច្រើនស្បែក និង dark mode",
              ],
            },
          },
          {
            id: "room-owner",
            title: "Room Owner",
            icon: "home",
            color: ["#ea580c", "#431407"],
            desc: {
              en: "A room rental management web app with a Firebase backend for managers and tenants, monthly payment tracking, join requests and a Khmer/English toggle.",
              km: "កម្មវិធីគ្រប់គ្រងជួលបន្ទប់ជាមួយ Firebase សម្រាប់ម្ចាស់ និងអ្នកជួល តាមដានការបង់ប្រាក់ប្រចាំខែ សំណើចូលរួម និងប្តូរភាសាខ្មែរ/អង់គ្លេស។",
            },
            tech: ["HTML5", "CSS3", "JavaScript", "Firebase"],
            features: {
              en: [
                "Manager and tenant roles",
                "Monthly payment tracking with KHQR",
                "Join request accept / decline",
                "Payment history with receipts",
                "Theme customization",
              ],
              km: [
                "តួនាទីម្ចាស់ និងអ្នកជួល",
                "តាមដានការបង់ប្រាក់ប្រចាំខែជាមួយ KHQR",
                "ទទួលយក / បដិសេធសំណើចូលរួម",
                "ប្រវត្តិបង់ប្រាក់ជាមួយបង្កាន់ដៃ",
                "ប្ដូរស្បែកតាមចិត្ត",
              ],
            },
          },
          {
            id: "exam-results",
            title: "Student Exam Results",
            icon: "chart",
            color: ["#db2777", "#3b0a22"],
            desc: {
              en: "An admin web dashboard and a student mobile app for publishing exam results, calculating GPA and sharing schedules and announcements.",
              km: "ផ្ទាំងគ្រប់គ្រងសម្រាប់ admin និងកម្មវិធីទូរស័ព្ទសម្រាប់និស្សិត ដើម្បីផ្សាយលទ្ធផលប្រឡង គណនា GPA និងចែករំលែកកាលវិភាគ និងសេចក្តីជូនដំណឹង។",
            },
            tech: ["Flutter", "Dart", "Laravel", "MySQL", "Firebase"],
            features: {
              en: [
                "Admin manages students, subjects, semesters and scores",
                "Grades auto-calculated from grading rules",
                "Results hidden until the admin publishes them",
                "Students view results, GPA, exam schedule and announcements",
              ],
              km: [
                "Admin គ្រប់គ្រងនិស្សិត មុខវិជ្ជា ឆមាស និងពិន្ទុ",
                "ចំណាត់ថ្នាក់គណនាស្វ័យប្រវត្តិតាមច្បាប់ពិន្ទុ",
                "លទ្ធផលលាក់រហូតដល់ admin ផ្សាយ",
                "និស្សិតមើលលទ្ធផល GPA កាលវិភាគប្រឡង និងសេចក្តីជូនដំណឹង",
              ],
            },
          },
        ],
        techStack: [
          ["React", "react/react-original.svg"],
          ["JavaScript", "javascript/javascript-original.svg"],
          ["HTML5", "html5/html5-original.svg"],
          ["CSS3", "css3/css3-original.svg"],
          ["Python", "python/python-original.svg"],
          ["PHP", "php/php-original.svg"],
          ["Laravel", "laravel/laravel-original.svg"],
          ["MySQL", "mysql/mysql-original.svg"],
          ["Firebase", "firebase/firebase-original.svg"],
          ["Git", "git/git-original.svg"],
          ["GitHub", "github/github-original.svg", true],
          ["C#", "csharp/csharp-original.svg"],
          ["Dart", "dart/dart-original.svg"],
          ["Flutter", "flutter/flutter-original.svg"],
          ["XAMPP", "xampp/xampp-original.svg"],
          ["Unity", "unity/unity-original.svg", true],
          ["VS Code", "vscode/vscode-original.svg"],
          ["Postman", "postman/postman-original.svg"],
        ],
      };

      /* =====================================================================
   Translations
   ===================================================================== */
      const I18N = {
        en: {
          loading: "Loading assets...",
          nav_home: "Home",
          nav_about: "About",
          nav_portfolio: "Portfolio",
          nav_contact: "Contact",
          welcome: "Welcome to",
          myport: "My Portfolio",
          subtitle: "Laravel & Firebase Enthusiast",
          lead: "Curiosity turned into passion. I love experimenting with code, exploring new technologies and turning ideas into something real. From backend logic to clean web interfaces, I always try to build things that don't just look good, but are also comfortable to use.",
          viewproj: "View Projects",
          viewprojshort: "View Projects",
          contactme: "Contact Me",
          findme: "FIND ME",
          findme_t: "Find me",
          aboutme: "About Me",
          hi: "Hi, I'm",
          bio1: "I'm a <b>web development student</b> focused on building practical, real-world web applications, especially business management systems. I enjoy turning ideas into working products, from database design to clean, responsive interfaces.",
          bio2: "With Laravel, PHP, MySQL and Firebase I build systems for libraries, shops, supermarkets, room rental and water supply, many with Khmer-language interfaces, and I keep learning something new with every project.",
          education: "Education",
          experience: "Experience",
          st_proj: "Projects",
          st_proj_d: "Things I've built",
          st_cert: "Certificates",
          st_cert_d: "Validated skills",
          st_award: "Awards",
          st_award_d: "Achievements earned",
          m1: "A little music.",
          m2: "A lot of ideas.",
          mp: "Choose a song below to play it here, or add your own audio files.",
          addsongs: "Add songs",
          t_proj: "Projects",
          t_cert: "Certificates",
          t_award: "Achievements",
          t_tech: "Tech Stack",
          details: "Details",
          add_cert: "Add certificate",
          add_award: "Add achievement",
          change: "Change image",
          f_name: "Name",
          f_name_ph: "Your name",
          f_email: "Email",
          f_email_ph: "Your email",
          f_msg: "Message",
          f_msg_ph: "Your message",
          f_send: "Send Message",
          c_label: "Comment",
          c_ph: "Write your comment here...",
          c_name: "Your name",
          c_name_ph: "Your name",
          c_photo: "Profile photo (optional)",
          c_choose: "Choose photo",
          c_max: "Max file size 5 MB",
          c_send: "Send Comment",
          foot_d:
            "Building practical web applications with clean code, sharp typography and a smooth user experience.",
          foot_nav: "Navigation",
          foot_con: "Connect",
          totop: "Back to top",
          back: "Back",
          p_tech: "Technologies Used",
          p_feat: "Key Features",
          pl_empty:
            "No songs yet.<br>Press <b>Add songs</b> to load your own audio files.",
          pl_none: "Nothing playing",
          pl_title: "My Coding Playlist",
          pl_local: "Songs stay in this browser tab",
          t_saved: "Saved",
          t_big: "Image is larger than 5 MB",
          t_msg_ok: "Message saved. Thank you!",
          t_cm_ok: "Comment posted",
          t_quota: "Browser storage is full. Remove an image and try again.",
          t_mail: "Opening your mail app...",
          ago_now: "just now",
          ago_m: "min ago",
          ago_h: "h ago",
          ago_d: "d ago",
          rights: "All rights reserved.",
        },
        km: {
          loading: "កំពុងផ្ទុក...",
          nav_home: "ទំព័រដើម",
          nav_about: "អំពីខ្ញុំ",
          nav_portfolio: "ផលប័ត្រ",
          nav_contact: "ទំនាក់ទំនង",
          welcome: "សូមស្វាគមន៍មកកាន់",
          myport: "ផលប័ត្ររបស់ខ្ញុំ",
          subtitle: "អ្នកស្រលាញ់ Laravel និង Firebase",
          lead: "ការចង់ដឹងចង់ឃើញបានក្លាយជាចំណង់ចំណូលចិត្ត។ ខ្ញុំចូលចិត្តពិសោធន៍ជាមួយកូដ ស្វែងយល់បច្ចេកវិទ្យាថ្មីៗ និងបំប្លែងគំនិតទៅជាអ្វីដែលពិតប្រាកដ។ ចាប់ពីតក្កវិជ្ជា Backend ដល់ចំណុចប្រទាក់គេហទំព័រស្អាត ខ្ញុំព្យាយាមបង្កើតអ្វីដែលមិនត្រឹមតែមើលទៅស្អាត ថែមទាំងងាយស្រួលប្រើ។",
          viewproj: "មើលគម្រោង",
          viewprojshort: "មើលគម្រោង",
          contactme: "ទាក់ទងខ្ញុំ",
          findme: "ស្វែងរកខ្ញុំ",
          findme_t: "ស្វែងរកខ្ញុំ",
          aboutme: "អំពីខ្ញុំ",
          hi: "សួស្តី ខ្ញុំគឺ",
          bio1: "ខ្ញុំជា<b>និស្សិតអភិវឌ្ឍន៍គេហទំព័រ</b> ដែលផ្តោតលើការបង្កើតកម្មវិធីគេហទំព័រជាក់ស្តែង ជាពិសេសប្រព័ន្ធគ្រប់គ្រងអាជីវកម្ម។ ខ្ញុំចូលចិត្តបំប្លែងគំនិតទៅជាផលិតផលដែលអាចប្រើបាន ចាប់ពីការរចនាមូលដ្ឋានទិន្នន័យ រហូតដល់ចំណុចប្រទាក់ស្អាត និងឆ្លើយតបគ្រប់ឧបករណ៍។",
          bio2: "ជាមួយ Laravel, PHP, MySQL និង Firebase ខ្ញុំបង្កើតប្រព័ន្ធសម្រាប់បណ្ណាល័យ ហាង ផ្សារទំនើប ការជួលបន្ទប់ និងការផ្គត់ផ្គង់ទឹកស្អាត ដែលភាគច្រើនមានចំណុចប្រទាក់ជាភាសាខ្មែរ ហើយខ្ញុំរៀនអ្វីថ្មីជានិច្ចជាមួយគម្រោងនីមួយៗ។",
          education: "ការសិក្សា",
          experience: "បទពិសោធន៍",
          st_proj: "គម្រោង",
          st_proj_d: "ស្នាដៃដែលបានបង្កើត",
          st_cert: "វិញ្ញាបនបត្រ",
          st_cert_d: "ជំនាញដែលបានបញ្ជាក់",
          st_award: "ពានរង្វាន់",
          st_award_d: "សមិទ្ធផលដែលសម្រេចបាន",
          m1: "តន្ត្រីបន្តិច។",
          m2: "គំនិតច្រើន។",
          mp: "ជ្រើសរើសបទចម្រៀងខាងក្រោមដើម្បីចាក់នៅទីនេះ ឬបន្ថែមឯកសារសំឡេងរបស់អ្នក។",
          addsongs: "បន្ថែមបទចម្រៀង",
          t_proj: "គម្រោង",
          t_cert: "វិញ្ញាបនបត្រ",
          t_award: "សមិទ្ធផល",
          t_tech: "បច្ចេកវិទ្យា",
          details: "លម្អិត",
          add_cert: "បន្ថែមវិញ្ញាបនបត្រ",
          add_award: "បន្ថែមសមិទ្ធផល",
          change: "ប្តូររូបភាព",
          f_name: "ឈ្មោះ",
          f_name_ph: "ឈ្មោះរបស់អ្នក",
          f_email: "អ៊ីមែល",
          f_email_ph: "អ៊ីមែលរបស់អ្នក",
          f_msg: "សារ",
          f_msg_ph: "សាររបស់អ្នក",
          f_send: "ផ្ញើសារ",
          c_label: "មតិយោបល់",
          c_ph: "សរសេរមតិយោបល់របស់អ្នកនៅទីនេះ...",
          c_name: "ឈ្មោះរបស់អ្នក",
          c_name_ph: "ឈ្មោះរបស់អ្នក",
          c_photo: "រូបភាពប្រវត្តិរូប (ស្រេចចិត្ត)",
          c_choose: "ជ្រើសរើសរូបភាព",
          c_max: "ទំហំឯកសារអតិបរមា ៥ MB",
          c_send: "ផ្ញើមតិយោបល់",
          foot_d:
            "បង្កើតកម្មវិធីគេហទំព័រជាក់ស្តែង ដោយកូដស្អាត ពុម្ពអក្សរច្បាស់ និងបទពិសោធន៍ប្រើប្រាស់រលូន។",
          foot_nav: "ការរុករក",
          foot_con: "ទំនាក់ទំនង",
          totop: "ត្រឡប់ទៅលើ",
          back: "ត្រឡប់ក្រោយ",
          p_tech: "បច្ចេកវិទ្យាដែលបានប្រើ",
          p_feat: "លក្ខណៈពិសេស",
          pl_empty:
            "មិនទាន់មានបទចម្រៀងទេ។<br>ចុច <b>បន្ថែមបទចម្រៀង</b> ដើម្បីផ្ទុកឯកសារសំឡេងរបស់អ្នក។",
          pl_none: "មិនមានអ្វីកំពុងចាក់",
          pl_title: "បញ្ជីចម្រៀងសរសេរកូដ",
          pl_local: "បទចម្រៀងនៅក្នុងផ្ទាំងកម្មវិធីរុករកនេះ",
          t_saved: "បានរក្សាទុក",
          t_big: "រូបភាពធំជាង ៥ MB",
          t_msg_ok: "បានរក្សាទុកសារ។ សូមអរគុណ!",
          t_cm_ok: "បានផ្សាយមតិយោបល់",
          t_quota:
            "ទំហំផ្ទុកក្នុងកម្មវិធីរុករកពេញ។ សូមលុបរូបភាពមួយ រួចព្យាយាមម្តងទៀត។",
          t_mail: "កំពុងបើកកម្មវិធីអ៊ីមែល...",
          ago_now: "ទើបតែ",
          ago_m: "នាទីមុន",
          ago_h: "ម៉ោងមុន",
          ago_d: "ថ្ងៃមុន",
          rights: "រក្សាសិទ្ធិគ្រប់យ៉ាង។",
        },
      };
      let LANG = "en";
      try {
        LANG = localStorage.getItem("pf_lang") || "en";
      } catch (e) {}
      const T = (k) =>
        I18N[LANG] && I18N[LANG][k] !== undefined
          ? I18N[LANG][k]
          : I18N.en[k] || k;
      const L = (obj) =>
        obj && typeof obj === "object" ? obj[LANG] || obj.en : obj;

      /* =====================================================================
   Helpers
   ===================================================================== */
      const $ = (s, r = document) => r.querySelector(s);
      const $$ = (s, r = document) => [...r.querySelectorAll(s)];
      const store = {
        get(k, d) {
          try {
            const v = localStorage.getItem(k);
            return v === null ? d : JSON.parse(v);
          } catch (e) {
            return d;
          }
        },
        set(k, v) {
          try {
            localStorage.setItem(k, JSON.stringify(v));
            return true;
          } catch (e) {
            toast(T("t_quota"));
            return false;
          }
        },
      };
      function toast(msg) {
        const t = $("#toast");
        t.textContent = msg;
        t.classList.add("show");
        clearTimeout(toast._t);
        toast._t = setTimeout(() => t.classList.remove("show"), 2600);
      }
      function readImage(file, max = 900, q = 0.82) {
        return new Promise((res, rej) => {
          if (!file || !file.type.startsWith("image/")) return rej();
          if (file.size > 5 * 1024 * 1024) {
            toast(T("t_big"));
            return rej();
          }
          const fr = new FileReader();
          fr.onload = (e) => {
            const im = new Image();
            im.onload = () => {
              const s = Math.min(1, max / Math.max(im.width, im.height));
              const c = document.createElement("canvas");
              c.width = Math.round(im.width * s);
              c.height = Math.round(im.height * s);
              c.getContext("2d").drawImage(im, 0, 0, c.width, c.height);
              res(c.toDataURL("image/jpeg", q));
            };
            im.onerror = () => res(e.target.result);
            im.src = e.target.result;
          };
          fr.onerror = rej;
          fr.readAsDataURL(file);
        });
      }
      const esc = (s) =>
        String(s).replace(
          /[&<>"']/g,
          (c) =>
            ({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            })[c],
        );
      const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";
      const techMap = Object.fromEntries(
        CONFIG.techStack.map((t) => [t[0], t]),
      );

      const ICONS = {
        github:
          '<svg viewBox="0 0 24 24"><path d="M12 .5a11.500 11.500 0 0 0-3.600 22.400c.6.100.8-.3.8-.6v-2c-3.200.7-3.900-1.500-3.900-1.500-.5-1.300-1.300-1.700-1.300-1.700-1-.7.100-.7.100-.7 1.200.1 1.800 1.200 1.800 1.200 1 1.800 2.800 1.300 3.400 1 .1-.8.400-1.300.7-1.600-2.600-.3-5.300-1.300-5.300-5.700 0-1.300.5-2.300 1.200-3.100-.1-.3-.5-1.500.1-3.100 0 0 1-.3 3.200 1.200a11 11 0 0 1 5.800 0c2.200-1.500 3.200-1.200 3.200-1.200.6 1.600.2 2.800.1 3.100.8.800 1.200 1.800 1.200 3.100 0 4.400-2.700 5.400-5.300 5.700.4.400.8 1.100.8 2.200v3.300c0 .3.200.7.800.6A11.500 11.500 0 0 0 12 .5Z"/></svg>',
        instagram:
          '<svg viewBox="0 0 24 24"><path d="M12 7.200A4.800 4.800 0 1 0 12 16.800 4.800 4.800 0 0 0 12 7.200Zm0 7.900a3.100 3.100 0 1 1 0-6.200 3.100 3.100 0 0 1 0 6.200ZM17.200 6a1.100 1.100 0 1 0 0 2.200 1.100 1.100 0 0 0 0-2.200ZM12 2.200c-3.200 0-3.600 0-4.800.1-1.300.1-2.100.3-2.900.6-.8.300-1.400.7-2.100 1.400C1.500 5 1.100 5.700.8 6.500c-.3.800-.5 1.600-.6 2.900C.1 10.600.1 11 .1 12.100s0 3.600.1 4.800c.1 1.300.3 2.100.6 2.900.3.800.7 1.400 1.400 2.100.7.700 1.300 1.100 2.100 1.400.8.300 1.600.5 2.900.6 1.200.1 1.600.1 4.800.1s3.600 0 4.800-.1c1.300-.1 2.100-.3 2.900-.6.800-.3 1.400-.7 2.100-1.400.7-.7 1.100-1.300 1.400-2.100.3-.8.500-1.600.6-2.900.1-1.200.1-1.600.1-4.800s0-3.600-.1-4.800c-.1-1.300-.3-2.100-.6-2.900-.3-.8-.7-1.400-1.400-2.100-.7-.7-1.300-1.100-2.100-1.400-.8-.3-1.600-.5-2.900-.6C15.600 2.200 15.200 2.200 12 2.200Zm0 1.800c3.100 0 3.500 0 4.700.1 1.100.1 1.700.2 2.100.4.500.2.900.4 1.300.8.400.4.700.8.800 1.300.2.400.3 1 .4 2.100.1 1.200.1 1.600.1 4.700s0 3.500-.1 4.700c-.1 1.100-.2 1.700-.4 2.100-.2.500-.4.900-.8 1.300-.4.400-.8.700-1.300.8-.4.200-1 .3-2.100.4-1.200.1-1.600.1-4.700.1s-3.500 0-4.700-.1c-1.100-.1-1.700-.2-2.100-.4-.5-.2-.9-.4-1.300-.8-.4-.4-.7-.8-.8-1.300-.2-.4-.3-1-.4-2.100C3.900 15.500 3.900 15.100 3.900 12s0-3.500.1-4.700c.1-1.100.2-1.700.4-2.100.2-.5.4-.9.8-1.300.4-.4.8-.7 1.300-.8.4-.2 1-.3 2.100-.4C8.500 3.900 8.900 3.900 12 3.900Z"/></svg>',
        tiktok:
          '<svg viewBox="0 0 24 24"><path d="M19.600 6.300a5 5 0 0 1-3.100-1.700A5 5 0 0 1 15.300 1.500h-3.400v13.300a2.900 2.900 0 1 1-2-2.700V8.600a6.300 6.300 0 1 0 5.400 6.200V8.700a8.300 8.300 0 0 0 4.900 1.600V6.900a5 5 0 0 1-.6-.6Z"/></svg>',
        facebook:
          '<svg viewBox="0 0 24 24"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z"/></svg>',
        telegram:
          '<svg viewBox="0 0 24 24"><path d="m21.8 3.2-3.3 17.2c-.2 1.2-.9 1.5-1.9.9l-5.3-3.9-2.6 2.5c-.3.3-.5.5-1 .5l.4-5.4 9.9-8.9c.4-.4-.1-.6-.6-.2L5.2 13.6 0.1 12c-1.1-.3-1.1-1 .2-1.5L20 2.9c.9-.3 2.1.2 1.8.3Z"/></svg>',
        arrow:
          '<svg class="ar" viewBox="0 0 24 24"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>',
        cap: '<svg viewBox="0 0 24 24"><path d="M22 10 12 5 2 10l10 5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></svg>',
        code: '<svg viewBox="0 0 24 24"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>',
        brief:
          '<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 13h20"/></svg>',
        book: '<svg viewBox="0 0 24 24"><path d="M4 19.500A2.500 2.500 0 0 1 6.500 17H20V3H6.500A2.500 2.500 0 0 0 4 5.500Z"/><path d="M4 19.500A2.500 2.500 0 0 0 6.500 22H20v-5"/></svg>',
        cart: '<svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.700 13.400a2 2 0 0 0 2 1.600h9.700a2 2 0 0 0 2-1.600L23 6H6"/></svg>',
        store:
          '<svg viewBox="0 0 24 24"><path d="M3 9 5 3h14l2 6"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M5 12v9h14v-9"/></svg>',
        drop: '<svg viewBox="0 0 24 24"><path d="M12 2.700s7 7.300 7 12.300a7 7 0 0 1-14 0C5 10 12 2.700 12 2.700Z"/></svg>',
        home: '<svg viewBox="0 0 24 24"><path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M9 22V12h6v10"/></svg>',
        chart:
          '<svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 15v3"/><path d="M12 10v8"/><path d="M17 6v12"/></svg>',
        plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14"/><path d="M5 12h14"/></svg>',
        img: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/></svg>',
      };

      /* =====================================================================
   Loader
   ===================================================================== */
      (function loader() {
        const num = $("#loadNum"),
          bar = $("#loadBar"),
          el = $("#loader");
        let p = 0,
          loaded = document.readyState === "complete";
        window.addEventListener("load", () => (loaded = true));
        const started = performance.now();
        function step(now) {
          const t = (now - started) / 2200;
          let target = Math.min(1, t) * 100;
          if (!loaded && target > 92) target = 92;
          if (now - started > 6000) loaded = true;
          p += (target - p) * 0.12;
          const v = Math.min(100, Math.round(p));
          num.textContent = v;
          bar.style.width = v + "%";
          if (v >= 100 || (loaded && t >= 1 && p > 99.2)) {
            num.textContent = 100;
            bar.style.width = "100%";
            setTimeout(() => {
              el.classList.add("done");
              document.body.classList.remove("locked");
              kick();
            }, 250);
            return;
          }
          requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      })();
      function kick() {
        revealObserve();
        route();
      }

      /* =====================================================================
   Starfield + shooting stars
   ===================================================================== */
      (function stars() {
        const c = $("#stars"),
          ctx = c.getContext("2d");
        let W,
          H,
          S = [],
          shoot = [];
        const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
        function size() {
          W = c.width = innerWidth * devicePixelRatio;
          H = c.height = innerHeight * devicePixelRatio;
          const n = Math.round((innerWidth * innerHeight) / 7000);
          S = Array.from({ length: n }, () => ({
            x: Math.random() * W,
            y: Math.random() * H,
            r: (Math.random() * 1.3 + 0.3) * devicePixelRatio,
            a: Math.random(),
            s: Math.random() * 0.02 + 0.004,
            d: Math.random() > 0.5 ? 1 : -1,
          }));
        }
        size();
        addEventListener("resize", size);
        function spawn() {
          const dpr = devicePixelRatio;
          shoot.push({
            x: Math.random() * W * 0.8,
            y: Math.random() * H * 0.35,
            vx: (3 + Math.random() * 3) * dpr,
            vy: (2 + Math.random() * 2.5) * dpr,
            life: 1,
          });
        }
        let nextShoot = 0;
        function draw(t) {
          ctx.clearRect(0, 0, W, H);
          for (const s of S) {
            if (!reduce) {
              s.a += s.s * s.d;
              if (s.a > 1 || s.a < 0.15) s.d *= -1;
            }
            ctx.globalAlpha = Math.max(0.1, Math.min(1, s.a)) * 0.9;
            ctx.fillStyle = "#cfdcff";
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, 6.283);
            ctx.fill();
          }
          if (!reduce && t > nextShoot) {
            spawn();
            nextShoot = t + 1800 + Math.random() * 3200;
          }
          for (let i = shoot.length - 1; i >= 0; i--) {
            const s = shoot[i];
            s.x += s.vx;
            s.y += s.vy;
            s.life -= 0.012;
            const g = ctx.createLinearGradient(
              s.x,
              s.y,
              s.x - s.vx * 22,
              s.y - s.vy * 22,
            );
            g.addColorStop(0, "rgba(220,235,255," + Math.max(0, s.life) + ")");
            g.addColorStop(1, "rgba(220,235,255,0)");
            ctx.globalAlpha = 1;
            ctx.strokeStyle = g;
            ctx.lineWidth = 1.6 * devicePixelRatio;
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(s.x - s.vx * 22, s.y - s.vy * 22);
            ctx.stroke();
            if (s.life <= 0 || s.x > W || s.y > H) shoot.splice(i, 1);
          }
          requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);
      })();

      /* =====================================================================
   Sound (small UI clicks via Web Audio)
   ===================================================================== */
      let soundOn = store.get("pf_sound", true);
      let actx = null;
      function beep(freq = 520, dur = 0.07, vol = 0.05) {
        if (!soundOn) return;
        try {
          actx =
            actx || new (window.AudioContext || window.webkitAudioContext)();
          const o = actx.createOscillator(),
            g = actx.createGain();
          o.type = "sine";
          o.frequency.value = freq;
          g.gain.setValueAtTime(vol, actx.currentTime);
          g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + dur);
          o.connect(g);
          g.connect(actx.destination);
          o.start();
          o.stop(actx.currentTime + dur);
        } catch (e) {}
      }
      function paintSound() {
        $("#soundBtn").classList.toggle("muted", !soundOn);
      }
      $("#soundBtn").addEventListener("click", () => {
        soundOn = !soundOn;
        store.set("pf_sound", soundOn);
        paintSound();
        beep(700);
      });
      paintSound();
      document.addEventListener("click", (e) => {
        if (e.target.closest(".nav a, .tab, .btn, .soc, .link-card"))
          beep(480, 0.06, 0.035);
      });

      /* =====================================================================
   Render: socials, education, experience, projects, tech
   ===================================================================== */
      function renderSocials() {
        const s = CONFIG.socials;
        const mk = (k, label) =>
          `<a class="soc" href="${esc(s[k].url)}" target="_blank" rel="noopener" aria-label="${label}">${ICONS[k]}</a>`;
        const html = [
          ["github", "GitHub"],
          ["instagram", "Instagram"],
          ["tiktok", "TikTok"],
          ["facebook", "Facebook"],
          ["telegram", "Telegram"],
        ]
          .map(([key, label]) => mk(key, label))
          .join("");
        $("#heroSocials").innerHTML = html;
        $("#footSocials").innerHTML = html;
        const card = (k, cls, name) =>
          `<a class="link-card spot" href="${esc(s[k].url)}" target="_blank" rel="noopener"><div class="lg ${cls}">${ICONS[k]}</div><div><b>${name}</b><span>${esc(s[k].handle)}</span></div>${ICONS.arrow}</a>`;
        $("#linkCards").innerHTML =
          card("instagram", "ig", "Instagram") +
          card("tiktok", "tt", "TikTok") +
          card("github", "gh", "GitHub") +
          card("facebook", "fb", "Facebook") +
          card("telegram", "tg", "Telegram");
      }
      function renderItems() {
        $("#eduList").innerHTML = CONFIG.education
          .map(
            (e) =>
              `<div class="item"><div class="ic">${ICONS[e.icon] || ICONS.cap}</div><div><h4>${esc(L(e.title))}</h4><p>${esc(L(e.sub))}</p><em>${esc(L(e.date))}</em></div></div>`,
          )
          .join("");
        $("#expList").innerHTML = CONFIG.experience
          .map(
            (e) =>
              `<div class="item"><div class="ic">${ICONS[e.icon] || ICONS.brief}</div><div><h4>${esc(L(e.title))}</h4><p>${esc(L(e.sub))}</p><em>${esc(L(e.date))}</em></div></div>`,
          )
          .join("");
      }
      function shots() {
        return store.get("pf_shots", {});
      }
      function thumbHTML(p) {
        const s = shots()[p.id];
        if (s) return `<img src="${s}" alt="${esc(p.title)}">`;
        return `<div class="art" style="background:linear-gradient(135deg,${p.color[0]},${p.color[1]})">${ICONS[p.icon]}<b>${esc(p.title)}</b><span>${p.tech.slice(0, 3).join(" · ")}</span></div>`;
      }
      function renderProjects() {
        $("#projGrid").innerHTML = CONFIG.projects
          .map(
            (p) => `
    <article class="glass edge spot proj">
      <div class="thumb" data-open="${p.id}">${thumbHTML(p)}<button class="chg" data-shot="${p.id}">${esc(T("change"))}</button></div>
      <h3>${esc(p.title)}</h3>
      <p>${esc(L(p.desc))}</p>
      <a class="btn" href="#/project/${p.id}"><span>${esc(T("details"))}</span><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.200" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a>
    </article>`,
          )
          .join("");
        $("#nProj").textContent = CONFIG.projects.length;
        observeScrollContent($("#projGrid"));
      }
      function techImg(t, cls = "") {
        const d = techMap[t];
        if (!d) return `<span class="fb">${esc(t.slice(0, 2))}</span>`;
        return `<img src="${DEV + d[1]}" class="${d[2] ? "inv" : ""} ${cls}" alt="${esc(t)}" loading="lazy" onerror="this.outerHTML='<span class=&quot;fb&quot;>${esc(t.slice(0, 2))}</span>'">`;
      }
      function renderTech() {
        $("#techGrid").innerHTML = CONFIG.techStack
          .map(
            (t, i) =>
              `<div class="tile spot" style="animation-delay:${i * 40}ms">${techImg(t[0])}<b>${esc(t[0])}</b></div>`,
          )
          .join("");
        observeScrollContent($("#techGrid"));
      }

      /* spotlight follows pointer */
      document.addEventListener("pointermove", (e) => {
        const el = e.target.closest && e.target.closest(".spot");
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", e.clientX - r.left + "px");
        el.style.setProperty("--my", e.clientY - r.top + "px");
      });

      /* =====================================================================
   Galleries (certificates / achievements)
   ===================================================================== */
      const GAL = {
        certs: { key: "pf_certs", el: "#galCerts", label: "add_cert" },
        awards: { key: "pf_awards", el: "#galAwards", label: "add_award" },
      };
      let galTarget = null;
      function renderGal(name) {
        const g = GAL[name],
          list = store.get(g.key, []);
        $(g.el).innerHTML =
          list
            .map(
              (src, i) =>
                `<div class="gi" data-src="${i}"><img src="${src}" alt=""><button class="x" data-del="${name}:${i}" aria-label="Remove">×</button></div>`,
            )
            .join("") +
          `<div class="add" data-add="${name}">${ICONS.plus}<span>${esc(T(g.label))}</span></div>`;
        if (name === "certs") $("#nCert").textContent = list.length;
        else $("#nAward").textContent = list.length;
        observeScrollContent($(g.el));
      }
      $("#galFile").addEventListener("change", async (e) => {
        const files = [...e.target.files];
        e.target.value = "";
        if (!galTarget) return;
        const g = GAL[galTarget],
          list = store.get(g.key, []);
        for (const f of files) {
          try {
            list.push(await readImage(f, 1000, 0.8));
          } catch (er) {}
        }
        if (store.set(g.key, list)) toast(T("t_saved"));
        renderGal(galTarget);
      });
      document.addEventListener("click", (e) => {
        const add = e.target.closest("[data-add]");
        if (add) {
          galTarget = add.dataset.add;
          $("#galFile").click();
          return;
        }
        const del = e.target.closest("[data-del]");
        if (del) {
          e.stopPropagation();
          const [n, i] = del.dataset.del.split(":"),
            g = GAL[n],
            list = store.get(g.key, []);
          list.splice(+i, 1);
          store.set(g.key, list);
          renderGal(n);
          return;
        }
        const gi = e.target.closest(".gi");
        if (gi) {
          $("#lbImg").src = gi.querySelector("img").src;
          $("#lightbox").classList.add("open");
        }
      });
      $("#lightbox").addEventListener("click", () =>
        $("#lightbox").classList.remove("open"),
      );
      addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          $("#lightbox").classList.remove("open");
          if ($("#project-page").classList.contains("open"))
            location.hash = "#portfolio";
        }
      });

      /* =====================================================================
   Project screenshots + project detail page
   ===================================================================== */
      let shotTarget = null;
      document.addEventListener("click", (e) => {
        const b = e.target.closest("[data-shot]");
        if (b) {
          e.preventDefault();
          e.stopPropagation();
          shotTarget = b.dataset.shot;
          $("#shotFile").click();
          return;
        }
        const th = e.target.closest("[data-open]");
        if (th) location.hash = "#/project/" + th.dataset.open;
      });
      $("#shotFile").addEventListener("change", async (e) => {
        const f = e.target.files[0];
        e.target.value = "";
        if (!f || !shotTarget) return;
        try {
          const d = await readImage(f, 1200, 0.82),
            all = shots();
          all[shotTarget] = d;
          if (store.set("pf_shots", all)) toast(T("t_saved"));
          renderProjects();
          if ($("#project-page").classList.contains("open"))
            openProject(shotTarget);
        } catch (er) {}
      });
      function openProject(id) {
        const p = CONFIG.projects.find((x) => x.id === id);
        if (!p) return;
        $("#ppTitle").textContent = p.title;
        $("#ppCrumb").textContent = p.title;
        $("#ppDesc").textContent = L(p.desc);
        $("#ppChips").innerHTML = p.tech
          .map(
            (t) =>
              `<span class="chip">${techImg(t)}<span>${esc(t)}</span></span>`,
          )
          .join("");
        $("#ppFeat").innerHTML = L(p.features)
          .map((f) => `<li>${esc(f)}</li>`)
          .join("");
        const s = shots()[p.id];
        $("#ppShot").innerHTML =
          `<div class="bar2"><i></i><i></i><i></i></div>` +
          (s
            ? `<img src="${s}" alt="">`
            : `<div class="art" style="background:linear-gradient(135deg,${p.color[0]},${p.color[1]})">${ICONS[p.icon]}<b>${esc(p.title)}</b></div>`) +
          `<button class="mini-btn" style="position:absolute;right:12px;bottom:12px" data-shot="${p.id}">${esc(T("change"))}</button>`;
        $("#project-page").classList.add("open");
        $("#project-page").scrollTop = 0;
        document.body.classList.add("locked", "pp");
        $(".nav").style.display = "none";
        $("#langBtn").style.zIndex = 600;
        $("#project-page").dataset.id = id;
      }
      function closeProject() {
        $("#project-page").classList.remove("open");
        document.body.classList.remove("locked", "pp");
        $(".nav").style.display = "";
      }
      $("#ppBack").addEventListener("click", () => {
        history.length > 1 ? history.back() : (location.hash = "#portfolio");
      });
      function route() {
        const m = location.hash.match(/^#\/project\/(.+)$/);
        if (m) {
          openProject(decodeURIComponent(m[1]));
          return;
        }
        closeProject();
      }
      addEventListener("hashchange", () => {
        route();
        const h = location.hash;
        if (h && !h.startsWith("#/")) {
          const t = $(h);
          if (t) t.scrollIntoView({ behavior: "smooth" });
        }
      });

      /* =====================================================================
   Tabs
   ===================================================================== */
      $("#tabs").addEventListener("click", (e) => {
        const b = e.target.closest(".tab");
        if (!b) return;
        $$(".tab").forEach((t) => t.classList.toggle("active", t === b));
        $$(".panel").forEach((p) =>
          p.classList.toggle("active", p.id === "p-" + b.dataset.p),
        );
        if (b.dataset.p === "tech") renderTech();
      });

      /* =====================================================================
   Lanyard physics (swing + drag)
   ===================================================================== */
      (function lanyard() {
        const el = $("#lanyard"),
          badge = $("#badge");
        let ang = 14,
          vel = 0,
          pullY = 0,
          pullVel = 0,
          drag = false,
          moved = 0,
          suppressClickUntil = 0,
          last = { x: 0, t: 0 },
          startX = 0,
          startY = 0,
          pointerX = 0,
          pointerY = 0;
        const K = 38,
          C = 1.6;
        let prev = performance.now();
        function frame(now) {
          const dt = Math.min(0.033, (now - prev) / 1000);
          prev = now;
          if (drag) {
            const edge = 220;
            let scrollSpeed = 0;
            if (pointerY > innerHeight - edge) {
              const progress = (pointerY - (innerHeight - edge)) / edge;
              scrollSpeed = Math.pow(progress, 1.35) * 70000;
            } else if (pointerY < edge) {
              const progress = (edge - pointerY) / edge;
              scrollSpeed = -Math.pow(progress, 1.35) * 70000;
            }
            if (scrollSpeed) {
              const before = scrollY;
              window.scrollBy(0, scrollSpeed * dt);
              const scrolled = scrollY - before;
              startY -= scrolled;
              pullY = Math.max(
                0,
                Math.min(document.documentElement.scrollHeight, pointerY - startY),
              );
              const p = pivot();
              const dx = pointerX - p.x;
              const dy = Math.max(60, pointerY - p.y);
              ang = Math.max(
                -55,
                Math.min(55, (-Math.atan2(dx, dy) * 180) / Math.PI),
              );
            }
          }
          if (!drag) {
            vel += (-K * ang - C * vel) * dt;
            ang += vel * dt;
            pullVel += (-90 * pullY - 8 * pullVel) * dt;
            pullY += pullVel * dt;
            if (Math.abs(pullY) < 0.1 && Math.abs(pullVel) < 0.5) {
              pullY = 0;
              pullVel = 0;
            }
            if (Math.abs(ang) < 0.02 && Math.abs(vel) < 0.05) {
              ang = 0;
              vel = 0;
            }
          }
          el.style.setProperty("--lanyard-pull", pullY.toFixed(1) + "px");
          el.style.transform = "rotate(" + ang.toFixed(2) + "deg)";
          requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
        function pivot() {
          const r = el.getBoundingClientRect();
          const wrap = el.parentElement.getBoundingClientRect();
          return { x: wrap.left + wrap.width / 2, y: wrap.top - 110 };
        }
        badge.addEventListener("pointerdown", (e) => {
          if (e.button !== 0) return;
          drag = true;
          moved = 0;
          startX = e.clientX;
          startY = e.clientY;
          pointerX = e.clientX;
          pointerY = e.clientY;
          pullVel = 0;
          last = { x: e.clientX, t: performance.now() };
          badge.classList.add("dragging");
          e.preventDefault();
          badge.setPointerCapture(e.pointerId);
        });
        badge.addEventListener("pointermove", (e) => {
          if (!drag) return;
          pointerX = e.clientX;
          pointerY = e.clientY;
          moved = Math.max(
            moved,
            Math.hypot(e.clientX - startX, e.clientY - startY),
          );
          e.preventDefault();
          pullY = Math.max(
            0,
            Math.min(
              document.documentElement.scrollHeight,
              e.clientY - startY,
            ),
          );
          const p = pivot(),
            dx = e.clientX - p.x,
            dy = Math.max(60, e.clientY - p.y);
          const target = Math.max(
            -55,
            Math.min(55, (-Math.atan2(dx, dy) * 180) / Math.PI),
          );
          const now = performance.now(),
            dtm = Math.max(1, now - last.t);
          vel = ((target - ang) / dtm) * 1000 * 0.35;
          ang = target;
          last = { x: e.clientX, t: now };
        });
        const end = (e) => {
          if (!drag) return;
          drag = false;
          badge.classList.remove("dragging");
          if (moved > 8) suppressClickUntil = performance.now() + 400;
          try {
            badge.releasePointerCapture(e.pointerId);
          } catch (er) {}
          if (moved < 8) beep(260, 0.09, 0.04);
        };
        badge.addEventListener("pointerup", end);
        badge.addEventListener("pointercancel", end);
        badge.addEventListener("click", (e) => {
          if (performance.now() > suppressClickUntil) return;
          e.preventDefault();
          e.stopImmediatePropagation();
        });
        badge.addEventListener("dragstart", (e) => e.preventDefault());
        addEventListener(
          "scroll",
          () => {
            if (Math.abs(vel) < 6) vel += (Math.random() - 0.5) * 2;
          },
          { passive: true },
        );
      })();

      /* =====================================================================
   Music player
   ===================================================================== */
      const PL = { tracks: [], cur: -1 };
      const FEATURED_TRACKS = [
        {
          title: "See You Again",
          artist: "Wiz Khalifa ft. Charlie Puth",
          videoId: "RgKAFK5djSk",
        },
        {
          title: "That Should Be Me",
          artist: "Justin Bieber",
          videoId: "p5Jw-T4dVss",
        },
        {
          title: "I Wanna Be Yours",
          artist: "Arctic Monkeys",
          videoId: "nyuo9-OjNNg",
        },
        {
          title: "Take Me to Your Heart",
          artist: "Michael Learns to Rock",
          videoId: "TbLT12eg-lw",
        },
        {
          title: "The Man Who Can't Be Moved",
          artist: "The Script",
          videoId: "gS9o1FAszdk",
        },
        {
          title: "Multo",
          artist: "Cup of Joe",
          videoId: "CcS1fsuT10M",
        },
        {
          title: "ដើរចេញ",
          artist: "Propey · Official Audio",
          videoId: "_hUFbmEjQZ8",
        },
      ];
      const audio = new Audio();
      audio.preload = "metadata";
      let currentFeatured = -1;
      const youtubePlayer = $("#youtubePlayer");
      const youtubeFrame = $("#youtubeFrame");
      const youtubeHint = $("#youtubeHint");
      const songCover = $("#songCover");
      songCover.addEventListener("error", () => {
        songCover.hidden = true;
      });
      songCover.addEventListener("load", () => {
        songCover.hidden = false;
      });
      function renderFeaturedTracks() {
        $("#featuredTracks").innerHTML = FEATURED_TRACKS.map(
          (track, index) =>
            `<button class="featured-track ${index === currentFeatured ? "is-selected" : ""}" type="button" data-featured="${index}" aria-pressed="${index === currentFeatured}"><span class="featured-track-number">${String(index + 1).padStart(2, "0")}</span><span class="featured-track-info"><b>${esc(track.title)}</b><small>${esc(track.artist)}</small></span><span class="featured-track-play" aria-hidden="true">▶</span></button>`,
        ).join("");
      }
      renderFeaturedTracks();
      function showSongCover(track) {
        songCover.alt = `${track.title} cover art`;
        songCover.src = `https://i.ytimg.com/vi/${track.videoId}/hqdefault.jpg`;
        songCover.hidden = false;
      }
      showSongCover(FEATURED_TRACKS[0]);
      function stopFeaturedPlayback() {
        youtubeFrame.removeAttribute("src");
        youtubePlayer.hidden = true;
        youtubeHint.hidden = false;
        songCover.hidden = true;
        currentFeatured = -1;
        renderFeaturedTracks();
      }
      $("#featuredTracks").addEventListener("click", (e) => {
        const button = e.target.closest("[data-featured]");
        if (!button) return;
        const index = Number(button.dataset.featured);
        const track = FEATURED_TRACKS[index];
        if (!track) return;
        audio.pause();
        currentFeatured = index;
        showSongCover(track);
        youtubeFrame.title = `${track.title} by ${track.artist} - YouTube player`;
        youtubeFrame.src = `https://www.youtube-nocookie.com/embed/${track.videoId}?autoplay=1&rel=0&playsinline=1`;
        youtubePlayer.hidden = false;
        youtubeHint.hidden = true;
        renderFeaturedTracks();
      });
      const fmt = (s) =>
        isFinite(s)
          ? String(Math.floor(s / 60)).padStart(2, "0") +
            ":" +
            String(Math.floor(s % 60)).padStart(2, "0")
          : "00:00";
      function renderTracks() {
        const box = $("#tracks");
        if (!PL.tracks.length) {
          box.innerHTML = `<div class="no-tracks">${T("pl_empty")}</div>`;
          return;
        }
        box.innerHTML = PL.tracks
          .map(
            (t, i) =>
              `<div class="track ${i === PL.cur ? "cur" : ""}" data-t="${i}"><span class="no">${i + 1}</span><div class="ti"><b>${esc(t.name)}</b><span>${esc(t.sub)}</span></div><span class="du">${fmt(t.dur)}</span><button class="rm" data-rm="${i}" aria-label="Remove">×</button></div>`,
          )
          .join("");
      }
      function paintPlayer() {
        $("#plTitle").textContent = T("pl_title");
        $("#plBy").textContent = CONFIG.name;
        $("#plNow").textContent =
          PL.cur >= 0 ? PL.tracks[PL.cur].name : T("pl_local");
        $("#playBtn").classList.toggle("playing", !audio.paused && PL.cur >= 0);
        renderTracks();
      }
      function play(i) {
        if (!PL.tracks.length) {
          $("#songFile").click();
          return;
        }
        if (i === undefined) i = PL.cur >= 0 ? PL.cur : 0;
        stopFeaturedPlayback();
        if (i !== PL.cur) {
          PL.cur = (i + PL.tracks.length) % PL.tracks.length;
          audio.src = PL.tracks[PL.cur].url;
        }
        audio.play().catch(() => {});
        paintPlayer();
      }
      $("#playBtn").addEventListener("click", () => {
        if (audio.paused) play();
        else {
          audio.pause();
          paintPlayer();
        }
      });
      $("#nextBtn").addEventListener(
        "click",
        () => PL.tracks.length && play(PL.cur + 1),
      );
      $("#prevBtn").addEventListener(
        "click",
        () => PL.tracks.length && play(PL.cur - 1),
      );
      audio.addEventListener("ended", () => play(PL.cur + 1));
      audio.addEventListener("pause", paintPlayer);
      audio.addEventListener("play", paintPlayer);
      audio.addEventListener("timeupdate", () => {
        $("#pFill").style.width =
          (audio.duration ? (audio.currentTime / audio.duration) * 100 : 0) +
          "%";
        $("#pTime").textContent = fmt(audio.currentTime);
      });
      $("#pBar").addEventListener("click", (e) => {
        if (!audio.duration) return;
        const r = e.currentTarget.getBoundingClientRect();
        audio.currentTime = ((e.clientX - r.left) / r.width) * audio.duration;
      });
      $("#tracks").addEventListener("click", (e) => {
        const rm = e.target.closest("[data-rm]");
        if (rm) {
          const i = +rm.dataset.rm;
          URL.revokeObjectURL(PL.tracks[i].url);
          PL.tracks.splice(i, 1);
          if (i === PL.cur) {
            audio.pause();
            audio.removeAttribute("src");
            PL.cur = -1;
          } else if (i < PL.cur) PL.cur--;
          paintPlayer();
          return;
        }
        const t = e.target.closest("[data-t]");
        if (t) play(+t.dataset.t);
      });
      $("#addSongs").addEventListener("click", () => $("#songFile").click());
      $("#songFile").addEventListener("change", (e) => {
        const files = [...e.target.files];
        e.target.value = "";
        files.forEach((f) => {
          if (!f.type.startsWith("audio/")) return;
          const url = URL.createObjectURL(f),
            tmp = new Audio();
          tmp.preload = "metadata";
          tmp.src = url;
          const tr = {
            name: f.name.replace(/\.[^.]+$/, ""),
            sub: CONFIG.name,
            url,
            dur: 0,
          };
          PL.tracks.push(tr);
          tmp.addEventListener("loadedmetadata", () => {
            tr.dur = tmp.duration;
            renderTracks();
          });
        });
        paintPlayer();
      });

      /* =====================================================================
   Contact form + comments
   ===================================================================== */
      $("#msgForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const n = $("#mName").value.trim(),
          em = $("#mEmail").value.trim(),
          m = $("#mText").value.trim();
        if (CONFIG.email) {
          toast(T("t_mail"));
          location.href =
            "mailto:" +
            CONFIG.email +
            "?subject=" +
            encodeURIComponent("Portfolio message from " + n) +
            "&body=" +
            encodeURIComponent(m + "\n\n— " + n + " (" + em + ")");
        } else {
          const list = store.get("pf_msgs", []);
          list.push({ n, em, m, t: Date.now() });
          store.set("pf_msgs", list);
          toast(T("t_msg_ok"));
        }
        e.target.reset();
      });
      let cPhoto = null;
      $("#cFile").addEventListener("change", async (e) => {
        const f = e.target.files[0];
        e.target.value = "";
        if (!f) return;
        try {
          cPhoto = await readImage(f, 160, 0.8);
          $("#cFileLbl").textContent = f.name;
        } catch (er) {
          cPhoto = null;
        }
      });
      function ago(t) {
        const s = (Date.now() - t) / 1000;
        if (s < 60) return T("ago_now");
        if (s < 3600) return Math.floor(s / 60) + " " + T("ago_m");
        if (s < 86400) return Math.floor(s / 3600) + " " + T("ago_h");
        return Math.floor(s / 86400) + " " + T("ago_d");
      }
      function renderComments() {
        const list = store.get("pf_comments", []);
        $("#cmList").innerHTML = list
          .slice()
          .reverse()
          .map(
            (c) =>
              `<div class="cm"><div class="av">${c.p ? `<img src="${c.p}" alt="">` : esc(c.n.slice(0, 1).toUpperCase())}</div><div class="bd"><div class="hd"><b>${esc(c.n)}</b><small>${ago(c.t)}</small></div><p>${esc(c.m)}</p></div></div>`,
          )
          .join("");
        observeScrollContent($("#cmList"));
      }
      $("#cmForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const list = store.get("pf_comments", []);
        list.push({
          n: $("#cName").value.trim(),
          m: $("#cText").value.trim(),
          p: cPhoto,
          t: Date.now(),
        });
        if (store.set("pf_comments", list)) toast(T("t_cm_ok"));
        e.target.reset();
        cPhoto = null;
        $("#cFileLbl").textContent = T("c_choose");
        renderComments();
      });

      /* =====================================================================
   Language
   ===================================================================== */
      function applyLang() {
        document.documentElement.lang = LANG === "km" ? "km" : "en";
        $$("[data-i]").forEach((el) => {
          const k = el.dataset.i,
            v = T(k);
          if (/<[a-z]/i.test(v)) el.innerHTML = v;
          else el.textContent = v;
          if (el.classList.contains("glitch")) el.dataset.text = v;
        });
        $$("[data-ph]").forEach((el) => (el.placeholder = T(el.dataset.ph)));
        $("#bio1").innerHTML = T("bio1");
        $("#bio2").innerHTML = T("bio2");
        $("#copy").textContent =
          "© " +
          new Date().getFullYear() +
          " " +
          CONFIG.name +
          ". " +
          T("rights");
        $$("#langBtn button").forEach((b) =>
          b.classList.toggle("active", b.dataset.l === LANG),
        );
        $("#cFileLbl").textContent = T("c_choose");
        renderItems();
        renderProjects();
        renderTech();
        renderGal("certs");
        renderGal("awards");
        renderComments();
        paintPlayer();
        if ($("#project-page").classList.contains("open"))
          openProject($("#project-page").dataset.id);
        observeScrollContent();
      }
      $("#langBtn").addEventListener("click", (e) => {
        const b = e.target.closest("button");
        if (!b) return;
        LANG = b.dataset.l;
        try {
          localStorage.setItem("pf_lang", LANG);
        } catch (er) {}
        applyLang();
        beep(620);
      });

      /* =====================================================================
   Nav active state, reveal, back-to-top, counters, glitch
   ===================================================================== */
      const sections = ["home", "about", "portfolio", "contact"].map((id) =>
        $("#" + id),
      );
      function onScroll() {
        const y = scrollY + innerHeight * 0.4;
        let cur = "home";
        sections.forEach((s) => {
          if (s.offsetTop <= y) cur = s.id;
        });
        $$("#nav a").forEach((a) =>
          a.classList.toggle("active", a.getAttribute("href") === "#" + cur),
        );
        $("#toTop").classList.toggle("show", scrollY > 500);
      }
      addEventListener("scroll", onScroll, { passive: true });
      $("#toTop").addEventListener("click", () =>
        scrollTo({ top: 0, behavior: "smooth" }),
      );
      $$('a[href^="#"]').forEach((a) =>
        a.addEventListener("click", (e) => {
          const h = a.getAttribute("href");
          if (h.startsWith("#/")) return;
          e.preventDefault();
          if (location.hash !== h) history.pushState(null, "", h);
          closeProject();
          const t = $(h);
          if (t) t.scrollIntoView({ behavior: "smooth" });
        }),
      );

      function revealObserve() {
        const io = new IntersectionObserver(
          (es) =>
            es.forEach((en) => {
              if (!en.isIntersecting) return;
              en.target.classList.add("in");
              const g = en.target.querySelector(".glitch");
              if (g) {
                g.classList.add("run");
                setTimeout(() => g.classList.remove("run"), 700);
              }
              io.unobserve(en.target);
            }),
          { threshold: 0.12 },
        );
        $$(".reveal").forEach((el) => io.observe(el));
        observeScrollContent();
        const cio = new IntersectionObserver(
          (es) =>
            es.forEach((en) => {
              if (en.isIntersecting) {
                $$(".stat .n").forEach((n) => bump(n));
                cio.disconnect();
              }
            }),
          { threshold: 0.3 },
        );
        cio.observe($(".stats"));
      }
      let scrollContentObserver = null;
      let scrollRevealFrame = 0;
      function revealVisibleContent() {
        if (scrollRevealFrame) return;
        scrollRevealFrame = requestAnimationFrame(() => {
          scrollRevealFrame = 0;
          $$(".scroll-reveal:not(.in)").forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top >= innerHeight * 0.9 || rect.bottom <= 0) return;
            el.classList.add("in");
            scrollContentObserver?.unobserve(el);
          });
        });
      }
      addEventListener("scroll", revealVisibleContent, { passive: true });
      addEventListener("resize", revealVisibleContent);
      document.addEventListener("visibilitychange", revealVisibleContent);
      function observeScrollContent(root = document) {
        const selector =
          "main h1, main h2, main h3, main h4, main p, main .item, main .stat, main .proj, main .tile, main .gi, main .featured-track, main .cm, main .btn, footer h5, footer p, footer li, footer a";
        const candidates = [
          ...(root.matches?.(selector) ? [root] : []),
          ...root.querySelectorAll(selector),
        ];
        candidates.forEach((el) => {
          if (el.closest(".reveal:not(.in)")) return;
          el.classList.add("scroll-reveal");
        });
        if (!("IntersectionObserver" in window)) {
          revealVisibleContent();
          return;
        }
        if (!scrollContentObserver) {
          scrollContentObserver = new IntersectionObserver(
            (entries) =>
              entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("in");
                scrollContentObserver.unobserve(entry.target);
              }),
            { threshold: 0.12 },
          );
        }
        root
          .querySelectorAll(".scroll-reveal:not(.in)")
          .forEach((el) => scrollContentObserver.observe(el));
        if (root.matches?.(".scroll-reveal:not(.in)"))
          scrollContentObserver.observe(root);
        revealVisibleContent();
      }
      function bump(n) {
        const end = +n.textContent || 0;
        if (!end) return;
        const t0 = performance.now();
        (function s(now) {
          const p = Math.min(1, (now - t0) / 900);
          n.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(s);
        })(t0);
      }

      /* =====================================================================
   Init
   ===================================================================== */
      $("#brandName").textContent = CONFIG.brand;
      $("#aboutName").textContent = CONFIG.name;
      $("#badgeName").textContent = CONFIG.name;
      $("#strapText").textContent = Array(6)
        .fill(CONFIG.name + "  ·  ")
        .join("");
      document.title = CONFIG.name + " | Portfolio";
      renderSocials();
      applyLang();
      onScroll();