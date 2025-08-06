Directory structure:
└── sumon-ray-portfolio-client/
    ├── README.md
    ├── components.json
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.js
    ├── postcss.config.mjs
    ├── tailwind.config.js
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── components/
    │   └── nurui/
    │       └── splash-cursor.tsx
    ├── lib/
    │   └── utils.ts
    ├── public/
    │   └── images/
    │       ├── terr1.webp
    │       ├── terr2.webp
    │       ├── events/
    │       ├── profile/
    │       └── testimonial/
    │           └── user1.JPG
    └── src/
        ├── app/
        │   ├── globals.css
        │   ├── layout.tsx
        │   ├── page.tsx
        │   ├── blog/
        │   │   └── [id]/
        │   │       └── page.tsx
        │   ├── dashboard/
        │   │   ├── layout.tsx
        │   │   ├── page.tsx
        │   │   ├── blog/
        │   │   │   ├── page.tsx
        │   │   │   └── all-blogs/
        │   │   │       └── page.tsx
        │   │   ├── contact/
        │   │   │   └── page.tsx
        │   │   ├── project/
        │   │   │   └── all-projects/
        │   │   │       └── page.tsx
        │   │   └── skills/
        │   │       └── all-skills/
        │   │           └── page.tsx
        │   ├── hooks/
        │   │   └── use-mobile.tsx
        │   ├── project/
        │   │   └── [id]/
        │   │       └── page.tsx
        │   ├── types/
        │   │   ├── blog.ts
        │   │   ├── project.ts
        │   │   ├── ProjectType.ts
        │   │   └── userRowProps.ts
        │   └── utils/
        │       ├── auth.ts
        │       ├── authOptions.ts
        │       ├── iconHelper.ts
        │       └── revalidationUtils.ts
        ├── components/
        │   ├── ClientWrapper.tsx
        │   ├── Footer.tsx
        │   ├── about/
        │   │   ├── AboutMe.tsx
        │   │   ├── AboutMe2.tsx
        │   │   ├── AboutMeTab.tsx
        │   │   ├── AboutSection.tsx
        │   │   ├── EducationTab.tsx
        │   │   ├── HobbiesTab.tsx
        │   │   └── LeadershipSection.tsx
        │   ├── banner/
        │   │   ├── AnimatedCounter.tsx
        │   │   ├── AnimatedText.tsx
        │   │   └── FloatingIcons.tsx
        │   ├── blog/
        │   │   └── GetAllBlogs.tsx
        │   ├── contact/
        │   │   └── ContactForm.tsx
        │   ├── hero/
        │   │   └── HeroSection.tsx
        │   ├── magicui/
        │   │   └── marquee.tsx
        │   ├── MobileSidebar/
        │   │   └── MobileSidebar.tsx
        │   ├── project/
        │   │   └── getAllProjects.tsx
        │   ├── shared/
        │   │   ├── Footer.tsx
        │   │   ├── HeroSecton.tsx
        │   │   ├── Navbar.tsx
        │   │   ├── NextButton.tsx
        │   │   ├── Profile-sidebar.tsx
        │   │   ├── ProfileAvatar.tsx
        │   │   └── Title.tsx
        │   ├── skills/
        │   │   ├── AllSkillLists.tsx
        │   │   └── skill.interface.ts
        │   └── ui/
        │       ├── accordion.tsx
        │       ├── alert-dialog.tsx
        │       ├── avatar.tsx
        │       ├── badge.tsx
        │       ├── breadcrumb.tsx
        │       ├── button.tsx
        │       ├── card.tsx
        │       ├── carousel.tsx
        │       ├── checkbox.tsx
        │       ├── collapsible.tsx
        │       ├── dialog.tsx
        │       ├── dropdown-menu.tsx
        │       ├── form.tsx
        │       ├── input.tsx
        │       ├── label.tsx
        │       ├── navigation-menu.tsx
        │       ├── progress.tsx
        │       ├── select.tsx
        │       ├── separator.tsx
        │       ├── sheet.tsx
        │       ├── sidebar.tsx
        │       ├── skeleton.tsx
        │       ├── slider.tsx
        │       ├── sonner.tsx
        │       ├── switch.tsx
        │       ├── table.tsx
        │       ├── tabs.tsx
        │       ├── textarea.tsx
        │       ├── tooltip.tsx
        │       ├── Loader/
        │       │   ├── Loader.css
        │       │   └── Loader.tsx
        │       └── particles/
        │           ├── FloatingParticles.tsx
        │           └── SectionHeading.tsx
        ├── constraints/
        │   └── index.ts
        ├── hooks/
        │   └── use-mobile.tsx
        ├── lib/
        │   └── utils.ts
        ├── services/
        │   ├── blogService/
        │   │   └── index.ts
        │   ├── projectService/
        │   │   └── index.ts
        │   ├── resumeService/
        │   │   └── index.ts
        │   └── skillsService/
        │       └── index.ts
        └── styles/
            └── styles.css

