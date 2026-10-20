// All project content lives here. The homepage and every project page read from it,
// so a change here shows up everywhere.
//
// Images live in the images/ folder next to this file.
//
// Each project has:
//   cover    – image shown on the homepage gallery first
//   preview  – the images shown in the homepage gallery
//   sections – the full project page, top to bottom. Each section can have a title,
//              text and images. "layout" controls how the images are shown:
//                slides  – a swipeable row (most work)
//                columns – side by side at full height (long emails)
//                stack   – centered at their real size (small web banners)

const CDN = 'images/';

const PROJECTS = [
  {
    slug: 'coca-cola',
    title: 'Coca-Cola',
    year: '2024 – 2026',
    fields: ['Graphic Design', 'Direction', 'Photo Editing', 'AI Implementation'],
    summary: [
      'An ongoing body of work supporting the Coca-Cola brand across retail, venue and event marketing.',
      'Product imagery and posters for partner activations placed with Disney, Six Flags, SeaWorld, Bass Pro Shops and The Home Depot, plus a full suite of promotional assets for World of Coca-Cola, deployed on billboards, digital signage and posters throughout Atlanta.'
    ],
    intro: "An ongoing body of work supporting the Coca-Cola brand across retail, venue, and event marketing. Projects span product imagery and poster design for partner activations placed with Disney, Six Flags, SeaWorld, Bass Pro Shops, and The Home Depot, alongside a full suite of promotional assets for World of Coca-Cola, deployed on billboards, digital signage, and posters throughout Atlanta. The work moves between graphic design, art direction, photo editing, and AI-assisted production, balancing Coca-Cola's heritage brand system against fresh, campaign-specific concepts.",
    preview: [
      '6037_shareacoke_cling_20250404_v04_na.jpg',
      '6151_ko_bestbuy_marchmadness_cling_20260227_v04_na.jpg',
      '6142_ko_follet_fifa_cling_20260105_v01_na-01.jpg',
      '6075_fall_football_cling_20250724_v04_na_mech.jpg',
      '5883_ko_avantiad_april_20240405_mech.jpg',
      '6060_ko_orl_domsac_exterior_signs_20250617_v02_na_mech.jpg'
    ],
    sections: [
      {
        title: 'Retail & Partner Activations',
        layout: 'slides',
        imgs: [
          '6037_shareacoke_cling_20250404_v04_na.jpg',
          '6075_fall_football_cling_20250724_v04_na_mech.jpg',
          '6151_ko_bestbuy_marchmadness_cling_20260227_v04_na.jpg',
          '6004_ko_bestbuy_marchmadness_cling_20250110_v03_na.jpg',
          '6142_ko_follet_fifa_cling_20260105_v01_na-01.jpg',
          '6060_ko_orl_domsac_exterior_signs_20250617_v02_na_mech.jpg',
          '5883_ko_avantiad_april_20240405_mech.jpg',
          '5935_ba_cling_20240805_v01_na-01.jpg',
          '5845_bestbuy_march_cling_20240104_v01_na-01.jpg'
        ]
      },
      {
        title: '"World of Coca-Cola" Case Study',
        text: 'Campaign and production work for World of Coca-Cola, the Coca-Cola Company\'s flagship Atlanta attraction, produced on an ongoing retainer via UTÖKA. The work spans the attraction\'s website, out-of-home and digital signage across Atlanta, exhibit and offer promotion, and group-events sales collateral, most of it under the attraction\'s "Always Surprising" campaign line, extending Coca-Cola\'s Real Magic platform into venue marketing.',
        layout: 'slides',
        imgs: [
          'wocc_website_landingpage_1920x1080.jpg',
          '6165_wocc_as_assets_ooh2_20260313_v03_mech__1080x1920.jpg',
          '6134__pm_20260126_v01_na_1080x1920-v1-05.jpg',
          '6134_pmsocial_project6_20260123_v03_na_mech_1080x1080-03.jpg',
          '6167_wocc_acvb_ad_20260406_v04_na_mech.jpg'
        ]
      },
      {
        layout: 'stack',
        imgs: ['6165_wocc_as_assets_ooh2_20260313_v03_mech__900x240.jpg']
      }
    ]
  },
  {
    slug: 'citrus-magic',
    title: 'Citrus Magic',
    year: '2025',
    fields: ['Design', 'Direction', 'Illustration', 'AI Implementation'],
    summary: [
      'Social, email, web banners and illustration for a sustainable, eco-friendly cleaning brand, produced on a monthly retainer.',
      'AI-generated citrus bursts are combined with photo editing, while the Magic Spray bottles are composited in to keep the branding consistent.'
    ],
    intro: 'A selection of work for Citrus Magic, a sustainable, eco-friendly cleaning brand: social, email, web banners, and illustration produced on a monthly retainer.',
    preview: [
      '5953_cm_aug_retainer_20250725_mech_post2_c1.jpg',
      '5953_cm_aug_retainer_20250725_mech_post2_c2.jpg',
      '5953_cm_aug_retainer_20250725_mech_post2_c3.jpg',
      '5953_cm_mar_retainer_20250203_v01_1.jpg',
      '5953_cm_september_20250801_v01_na-01.jpg',
      '5953_cm_september_20250801_v01_na-02.jpg'
    ],
    sections: [
      {
        title: 'Social',
        text: 'This collection combines AI-generated citrus bursts with photo editing, while the Magic Spray bottles are intentionally composited in to preserve visual integrity and consistent branding.',
        layout: 'slides',
        imgs: [
          '5953_cm_mar_retainer_20250203_v01_1.jpg',
          '5953_cm_mar_retainer_20250211_v02_ed_post1_c2.jpg',
          '5953_cm_aug_retainer_20250725_mech_post2_c1.jpg',
          '5953_cm_aug_retainer_20250725_mech_post2_c2.jpg',
          '5953_cm_aug_retainer_20250725_mech_post2_c3.jpg'
        ]
      },
      {
        title: 'Illustrated Social Carousel',
        text: "A three-panel social media carousel for Citrus Magic's fall limited edition collection that seamlessly blends real product photography with hand-crafted illustration, placing physical spray cans within a magical, storybook autumn world of stylized trees, pumpkins, and drifting leaves.",
        layout: 'columns',
        imgs: [
          '5953_cm_september_20250801_v01_na-01.jpg',
          '5953_cm_september_20250801_v01_na-02.jpg',
          '5953_cm_september_20250801_v01_na-03.jpg'
        ]
      },
      {
        title: 'Web Banner Collection',
        layout: 'stack',
        imgs: [
          '5860_cm_badodors_bannerssocial_20240610_v02_na_mech_970x250.jpg',
          '5953_cm_atfbtf_20250324_v02_na_btf.jpg',
          '5860_cm_badodors_bannerssocial_20240610_v02_na_mech_728x90.jpg',
          '5860_cm_badodors_bannerssocial_20240610_v02_na_mech_300x250.jpg',
          '5860_cm_badodors_bannerssocial_20240610_v02_na_mech_300x600_1.jpg',
          '5860_cm_badodors_bannerssocial_20240610_v02_na_mech_160x600.jpg',
          '5860_cm_badodors_bannerssocial_20240610_v02_na_mech_300x50.jpg'
        ]
      },
      {
        title: 'Email Design',
        text: 'A collection of email designs for Citrus Magic that combines photo manipulation, hand-crafted illustration, and AI-assisted development to produce visually layered, seasonally immersive marketing campaigns, using rich color palettes, dynamic compositions, and strong calls-to-action to create emails that feel less like ads and more like an experience.',
        layout: 'columns',
        imgs: [
          '5953_cm_sep_email_20250818_v01_na_email2.png',
          '5953_cm_nov_email_20250927_mech_email1.png',
          '5953_cm_june_email_20250617_v01_na_email1.jpg'
        ]
      }
    ]
  },
  {
    slug: 'veggie-wash',
    title: 'Veggie Wash',
    year: '2025',
    fields: ['Graphic Design', 'Direction', 'Photo Editing', 'AI Implementation'],
    summary: [
      'Ongoing creative for the fruit and vegetable wash brand: monthly emails and social built around seasonal food moments rather than straight product pitches.',
      'Each send pairs the product with a timely hook, like National Waffle Day, a chef’s recipe feature or Fourth of July grilling.'
    ],
    intro: 'Ongoing creative for Veggie Wash, the fruit and vegetable wash brand: monthly emails and social built around seasonal food moments rather than straight product pitches.',
    preview: [
      '5953_cm_june_post3_20250527_v02_na.jpg',
      '5954_vw_aug_socials_20250722_na_v03artboard-3.jpg',
      '5954_vw_sep_socials_20250806_na_v01artboard-3.jpg',
      '5954_vw_sep_socials_20250806_na_v01artboard-2.jpg',
      'veggie-wash-april-email.webp',
      'veggie-wash-aug-email.webp'
    ],
    sections: [
      {
        title: 'Social',
        layout: 'slides',
        imgs: [
          '5954_vw_sep_socials_20250806_na_v01artboard-2.jpg',
          '5953_cm_june_post3_20250527_v02_na.jpg',
          '5954_vw_aug_socials_20250722_na_v03artboard-3.jpg',
          '5954_vw_sep_socials_20250806_na_v01artboard-3.jpg'
        ]
      },
      {
        title: 'Email Design',
        text: "A monthly email campaign for Veggie Wash, the fruit and vegetable wash brand, built around seasonal moments and food occasions rather than straight product pitches. Each send pairs the product with a timely hook — National Waffle Day, a chef's recipe feature, Fourth of July grilling — using appetite-driven food photography and lifestyle copy to position Veggie Wash as a natural first step in the kitchen. The result is a recurring series that keeps the brand top-of-mind across the calendar while tying every message back to clean, fresh produce.",
        layout: 'columns',
        imgs: [
          'veggie-wash-april-email.webp',
          'veggie-wash-aug-email.webp',
          'veggie-wash-july-email.webp'
        ]
      }
    ]
  },
  {
    slug: 'bold-monk',
    title: 'Bold Monk',
    year: '2024 – 2026',
    fields: ['Branding', 'Graphic Design', 'Direction', 'Photo Editing'],
    summary: [
      'Client-commissioned packaging concepts for Bold Monk Brewing, a brewpub rooted in the monastic origins of Belgian brewing.',
      'The system translates illuminated detailing, ecclesiastical type and devotional iconography into cans that feel reverent yet modern. Presented as concept development.'
    ],
    intro: "Client-commissioned packaging concepts for Bold Monk Brewing, an Atlanta brewpub rooted in the monastic origins of Belgian brewing. The brief: carry the brewery's identity onto a canned series. The system translates illuminated detailing, ecclesiastical type, and devotional iconography into cans that feel reverent yet modern. The brewery ultimately moved in a different direction, and the work is presented here as concept development.",
    preview: [
      'boldmonk-little-way-mockup.png',
      '_option2.png',
      '_option1.png',
      '6074_bm_statio_12ozcan_20260112_v05_na-03.png',
      '6074_bm_statio_12ozcan_20260112_v05_na.png',
      '5969_boldmonk_confession_12ozcan_20241007_v01_na-04.png'
    ],
    sections: [
      {
        title: 'The Cans',
        layout: 'slides',
        imgs: [
          'boldmonk-little-way-mockup.png',
          '_option9.png',
          '_option2.png',
          '_option1.png',
          '6074_bts_tlw_12ozcans_20250724_v02_na_option2.png'
        ]
      },
      {
        title: 'Ideation',
        text: 'The ideation took Bold Monk\'s faith-rooted identity and gave each beer its own concept, logo, and color scheme — drawing names and imagery from monastic and liturgical practice — while keeping the lineup unmistakably one family. Across the range, type, illustration, and palette shift to match both the beer and the spiritual idea behind it: restrained black-and-white for a mindful nonalcoholic brew, weighty blackletter and devotional text for a darker collab, deep liturgical reds and golds for an amber Märzen. A shared structural grid — the Bold Monk header, a monastic icon, the beer name, and "Brewed & Canned in ATL, GA" — ties every can together, so each design stands on its own while reading as part of one devotional system.',
        layout: 'slides',
        imgs: [
          '6074_bm_statio_12ozcan_20260112_v05_na-03.png',
          '6074_bm_statio_12ozcan_20260112_v05_na.png',
          '5969_boldmonk_confession_12ozcan_20241007_v01_na-04.png',
          '5969_boldmonk_confession_12ozcan_20241007_v01_na-01.png',
          '6074_boldmonk_lw_12oz_cans_20250724_na_v01-01.png'
        ]
      }
    ]
  },
  {
    slug: 'scuf-gaming',
    title: 'SCUF Gaming',
    year: '2023',
    fields: ['Graphic Design', 'Direction', 'Photo Editing', 'Advertising', 'Print'],
    summary: [
      'End-to-end campaign creative for SCUF Gaming’s product launches: teaser content, social assets and website homepage placements.',
      'Directed the visual identity of each product line from concept through execution, with asset rollouts that built anticipation for launch.'
    ],
    intro: "Led end-to-end product campaign creative for SCUF Gaming's new product launches, overseeing the development of teaser content, social assets, and website homepage placements. Directed the visual identity of each product line from concept through execution, building anticipation through strategic asset rollouts that consistently drove sell-out performance at launch.",
    preview: [
      'ifg23_gotaga_scl001_launch1_instagram_1080x1080.jpg',
      'gotaga_prf001_gotaga-email-influencer-launch_teaser.jpg',
      'ifg23_gotaga_scl001_carousel_1080x1080_01.jpg',
      'ax7_prf_001_-launch-email-assets_main_1280x1600.jpg',
      'ax7_prf_001_-launch-email-assets_presale_1280x1600.jpg',
      'nickmercs_prf002_social_teaser_release1.jpg'
    ],
    sections: [
      {
        title: 'Gotaga Collection',
        layout: 'slides',
        imgs: [
          'ifg23_gotaga_scl001_carousel_1080x1080_01.jpg',
          'gotaga_prf001_gotaga-email-influencer-launch_teaser.jpg',
          'gotaga_prf001_gotaga-email-influencer-launch_1280x1280_r1.jpg',
          'ifg23_gotaga_scl001_launch1_instagram_1080x1080.jpg'
        ]
      },
      {
        title: 'AX7 Launch',
        layout: 'slides',
        imgs: [
          'ax7_prf_001_-launch-email-assets_individual_1280x1600.jpg',
          'ax7_prf_001_-launch-email-assets_main_1280x1600.jpg',
          'ax7_prf_001_-launch-email-assets_presale_1280x1600.jpg'
        ]
      },
      {
        title: 'NICKMERCS Collection',
        layout: 'slides',
        imgs: [
          'nickmercs_prf002_social_teaser_release1.jpg',
          'nickmewercs_web001_web-assets_hero1_mb_750x1200.jpg',
          'nickmercs_prf002_launch_main_1280x1600.jpg'
        ]
      }
    ]
  },
  {
    slug: 'twitch-panels',
    title: 'Twitch Panels',
    year: '2023',
    fields: ['Graphic Design', 'Web', 'Motion', 'Photo Editing'],
    summary: [
      'A suite of co-branded Twitch panels developed with SCUF Gaming to amplify influencer creator collections across streaming platforms, balancing creator identity with brand cohesion.'
    ],
    intro: 'A suite of co-branded Twitch panels developed in partnership with SCUF Gaming, designed to amplify influencer creator collections across streaming platforms — balancing creator identity with brand cohesion.',
    preview: [
      'ifg23_009_stream_overlays_teepee_livenowannouncement_1080x1920.png',
      'ifg23_008_stream_overlays_aydan_announcements_1080x1920.png',
      'ifg23_008_stream_overlays_aydan_announcements_1200x675.png',
      'ifg23_009_stream_overlays_aydan_livenowannouncement_1080x1920.png',
      'ifg23_009_stream_overlays_teepee_announcement_1200x675.png',
      'ifg23_009_stream_overlays_aydan_webcam.png'
    ],
    sections: [
      {
        title: 'Aydan',
        layout: 'slides',
        imgs: [
          'ifg23_008_stream_overlays_aydan_announcements_1080x1920.png',
          'ifg23_009_stream_overlays_aydan_livenowannouncement_1080x1920.png',
          'ifg23_008_stream_overlays_aydan_announcements_1200x675.png',
          'ifg23_009_stream_overlays_aydan_webcam.png'
        ]
      },
      {
        title: 'TeePee',
        layout: 'slides',
        imgs: [
          'ifg23_009_stream_overlays_teepee_livenowannouncement_1080x1920.png',
          'ifg23_009_stream_overlays_teepee_announcement_1080x1920.png',
          'ifg23_009_stream_overlays_teepee_announcement_1200x675.png'
        ]
      },
      {
        title: 'Intermission Screens',
        layout: 'stack',
        imgs: ['template.jpg']
      }
    ]
  }
];
