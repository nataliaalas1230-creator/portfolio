// All project content lives here. The homepage and every project page read from it,
// so a change here shows up everywhere.
//
// Each project has:
//   cover    – image shown on the homepage gallery first
//   preview  – the images shown in the homepage gallery
//   sections – the full project page, top to bottom. Each section can have a title,
//              text and images. "layout" controls how the images are shown:
//                slides  – a swipeable row (most work)
//                columns – side by side at full height (long emails)
//                stack   – centered at their real size (small web banners)

const CDN = 'https://images.squarespace-cdn.com/content/v1/6967ce66a01c336c887bd430/';

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
      '7d16e553-fa93-43af-8d0b-b814d0ffcf30/6037_ShareaCoke_Cling_20250404_V04_NA.jpg',
      '0563aa55-49fe-4fc9-8482-e7752b2a90ce/6151_KO_BestBuy_MarchMadness_cling_20260227_V04_NA.jpg',
      'c13fd0d2-29df-43cb-930b-89b605b13f72/6142_KO_FOLLET_FIFA_Cling_20260105_V01_NA-01.jpg',
      '58ec7b78-9d17-42c2-a8f7-e24e6c67fcdc/6075_Fall_Football_cling_20250724_V04_NA_MECH.jpg',
      'a4e2ed3d-816b-4caf-811e-4a1b29a89fe7/5883_KO_AvantiAd_April_20240405_MECH.jpg',
      '6780bb1b-b816-4127-b9ed-ac8249f29310/6060_KO_ORL_DomSac_Exterior_Signs_20250617_V02_NA_MECH.jpg'
    ],
    sections: [
      {
        title: 'Retail & Partner Activations',
        layout: 'slides',
        imgs: [
          '7d16e553-fa93-43af-8d0b-b814d0ffcf30/6037_ShareaCoke_Cling_20250404_V04_NA.jpg',
          '58ec7b78-9d17-42c2-a8f7-e24e6c67fcdc/6075_Fall_Football_cling_20250724_V04_NA_MECH.jpg',
          '0563aa55-49fe-4fc9-8482-e7752b2a90ce/6151_KO_BestBuy_MarchMadness_cling_20260227_V04_NA.jpg',
          'a9b18db1-29b8-4a4d-8044-56b4d1629b11/6004_KO_BestBuy_MarchMadness_cling_20250110_V03_NA.jpg',
          'c13fd0d2-29df-43cb-930b-89b605b13f72/6142_KO_FOLLET_FIFA_Cling_20260105_V01_NA-01.jpg',
          '6780bb1b-b816-4127-b9ed-ac8249f29310/6060_KO_ORL_DomSac_Exterior_Signs_20250617_V02_NA_MECH.jpg',
          'a4e2ed3d-816b-4caf-811e-4a1b29a89fe7/5883_KO_AvantiAd_April_20240405_MECH.jpg',
          '0e692e85-5f64-436f-9e4f-2377e5e76b75/5935_BA_Cling_20240805_V01_NA-01.jpg',
          '8ece35a2-e145-4342-9e45-751150822aff/5845_BestBuy_March_cling_20240104_V01_NA-01.jpg'
        ]
      },
      {
        title: '"World of Coca-Cola" Case Study',
        text: 'Campaign and production work for World of Coca-Cola, the Coca-Cola Company\'s flagship Atlanta attraction, produced on an ongoing retainer via UTÖKA. The work spans the attraction\'s website, out-of-home and digital signage across Atlanta, exhibit and offer promotion, and group-events sales collateral, most of it under the attraction\'s "Always Surprising" campaign line, extending Coca-Cola\'s Real Magic platform into venue marketing.',
        layout: 'slides',
        imgs: [
          'e9950400-9e72-49d4-9198-c7fe8f01b582/WOCC_Website_LandingPage_1920x1080.jpg',
          '2363abd0-0df8-4cc8-bdb7-c6dd550e525f/6165_WOCC_AS_ASSETS_OOH2_20260313_V03_MECH__1080x1920.jpg',
          '03eb264d-d839-4a0c-a521-dcfba2b13155/6134__PM_20260126_V01_NA_1080x1920+v1-05.jpg',
          'cc7fa917-4b4e-4e23-88f7-79b929c31187/6134_PMSocial_Project6_20260123_V03_NA_MECH_1080x1080-03.jpg',
          '510c4c08-36ac-4a71-a1d9-77cfb6415c70/6167_WOCC_ACVB_Ad_20260406_V04_NA_MECH.jpg'
        ]
      },
      {
        layout: 'stack',
        imgs: ['d9eb8248-1bee-473f-8b00-7b90fb09cc57/6165_WOCC_AS_ASSETS_OOH2_20260313_V03_MECH__900x240.jpg']
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
      'bf43536a-b062-41a0-8433-2b0f3fde9f3f/5953_CM_AUG_Retainer_20250725_MECH_Post2_C1.jpg',
      '48e2641e-52c5-4c58-8b05-128196be35e4/5953_CM_AUG_Retainer_20250725_MECH_Post2_C2.jpg',
      'affdb0aa-3920-4083-9701-a1b3ebc74de3/5953_CM_AUG_Retainer_20250725_MECH_Post2_C3.jpg',
      '2fb4ca7b-c218-4a4c-bc67-939a7dc5056e/5953_CM_MAR_Retainer_20250203_V01_1.jpg',
      'd2336a68-dc42-4ed8-affa-491704c815d0/5953_CM_September_20250801_V01_NA-01.jpg',
      'e5d1d5a8-49b6-439f-94c9-8b76813344f2/5953_CM_September_20250801_V01_NA-02.jpg'
    ],
    sections: [
      {
        title: 'Social',
        text: 'This collection combines AI-generated citrus bursts with photo editing, while the Magic Spray bottles are intentionally composited in to preserve visual integrity and consistent branding.',
        layout: 'slides',
        imgs: [
          '2fb4ca7b-c218-4a4c-bc67-939a7dc5056e/5953_CM_MAR_Retainer_20250203_V01_1.jpg',
          '5627d0a4-3d44-4a94-90b4-476336ecd4d8/5953_CM_MAR_Retainer_20250211_V02_ED_Post1_C2.jpg',
          'bf43536a-b062-41a0-8433-2b0f3fde9f3f/5953_CM_AUG_Retainer_20250725_MECH_Post2_C1.jpg',
          '48e2641e-52c5-4c58-8b05-128196be35e4/5953_CM_AUG_Retainer_20250725_MECH_Post2_C2.jpg',
          'affdb0aa-3920-4083-9701-a1b3ebc74de3/5953_CM_AUG_Retainer_20250725_MECH_Post2_C3.jpg'
        ]
      },
      {
        title: 'Illustrated Social Carousel',
        text: "A three-panel social media carousel for Citrus Magic's fall limited edition collection that seamlessly blends real product photography with hand-crafted illustration, placing physical spray cans within a magical, storybook autumn world of stylized trees, pumpkins, and drifting leaves.",
        layout: 'columns',
        imgs: [
          'd2336a68-dc42-4ed8-affa-491704c815d0/5953_CM_September_20250801_V01_NA-01.jpg',
          'e5d1d5a8-49b6-439f-94c9-8b76813344f2/5953_CM_September_20250801_V01_NA-02.jpg',
          '7fd03e3a-01f6-4a71-933f-f2b5246bd585/5953_CM_September_20250801_V01_NA-03.jpg'
        ]
      },
      {
        title: 'Web Banner Collection',
        layout: 'stack',
        imgs: [
          'e5ae1eab-7e2b-44eb-91ba-dc7deadd75a1/5860_CM_BadOdors_BannersSocial_20240610_V02_NA_MECH_970x250.jpg',
          '4c5ee839-8ace-454b-8686-5bbfd3bd8158/5953_CM_ATFBTF_20250324_V02_NA_BTF.jpg',
          '9c3f5138-8a42-48ed-83ae-d28d0a260797/5860_CM_BadOdors_BannersSocial_20240610_V02_NA_MECH_728x90.jpg',
          'c9846f13-01fd-420d-b182-b358eba8ea90/5860_CM_BadOdors_BannersSocial_20240610_V02_NA_MECH_300x250.jpg',
          'f8e87c9a-52c5-491e-978c-b85a8767a443/5860_CM_BadOdors_BannersSocial_20240610_V02_NA_MECH_300x600_1.jpg',
          '8879b1fb-05fd-4745-8679-69c7abc14602/5860_CM_BadOdors_BannersSocial_20240610_V02_NA_MECH_160x600.jpg',
          '966fc6ea-0d1a-4b76-8432-645aa63a3ae2/5860_CM_BadOdors_BannersSocial_20240610_V02_NA_MECH_300x50.jpg'
        ]
      },
      {
        title: 'Email Design',
        text: 'A collection of email designs for Citrus Magic that combines photo manipulation, hand-crafted illustration, and AI-assisted development to produce visually layered, seasonally immersive marketing campaigns, using rich color palettes, dynamic compositions, and strong calls-to-action to create emails that feel less like ads and more like an experience.',
        layout: 'columns',
        imgs: [
          '2e7c1702-eef9-450f-95ed-7bd3446e820f/5953_CM_SEP_Email_20250818_V01_NA_Email2.png',
          '46172e1f-d667-45ba-aa0e-6c0d705b53a2/5953_CM_NOV_Email_20250927_MECH_Email1.png',
          '04f2a4fd-5115-4050-8fb3-c9c793f4ffcf/5953_CM_JUNE_Email_20250617_V01_NA_Email1.jpg'
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
      '132c44a8-299a-4633-a5ad-6ba1321e05f8/5953_CM_June_Post3_20250527_V02_NA.jpg',
      '950e0e9c-f07b-4ffb-803f-362f2a952b09/5954_VW_AUG_SOCIALS_20250722_NA_V03Artboard+3.jpg',
      'd9fcd554-dc60-45b4-aa3d-7bde61ce7246/5954_VW_SEP_SOCIALS_20250806_NA_V01Artboard+3.jpg',
      'a1eebf26-f366-4514-aa5c-aea2e3376b9d/5954_VW_SEP_SOCIALS_20250806_NA_V01Artboard+2.jpg',
      'd8f9390d-0022-4268-a4a1-bc1a4e9b9698/Veggie+Wash+April+Email',
      'e5206f39-a6ce-4381-8a06-42715f822d0a/Veggie+Wash+Aug+Email'
    ],
    sections: [
      {
        title: 'Social',
        layout: 'slides',
        imgs: [
          'a1eebf26-f366-4514-aa5c-aea2e3376b9d/5954_VW_SEP_SOCIALS_20250806_NA_V01Artboard+2.jpg',
          '132c44a8-299a-4633-a5ad-6ba1321e05f8/5953_CM_June_Post3_20250527_V02_NA.jpg',
          '950e0e9c-f07b-4ffb-803f-362f2a952b09/5954_VW_AUG_SOCIALS_20250722_NA_V03Artboard+3.jpg',
          'd9fcd554-dc60-45b4-aa3d-7bde61ce7246/5954_VW_SEP_SOCIALS_20250806_NA_V01Artboard+3.jpg'
        ]
      },
      {
        title: 'Email Design',
        text: "A monthly email campaign for Veggie Wash, the fruit and vegetable wash brand, built around seasonal moments and food occasions rather than straight product pitches. Each send pairs the product with a timely hook — National Waffle Day, a chef's recipe feature, Fourth of July grilling — using appetite-driven food photography and lifestyle copy to position Veggie Wash as a natural first step in the kitchen. The result is a recurring series that keeps the brand top-of-mind across the calendar while tying every message back to clean, fresh produce.",
        layout: 'columns',
        imgs: [
          'd8f9390d-0022-4268-a4a1-bc1a4e9b9698/Veggie+Wash+April+Email',
          'e5206f39-a6ce-4381-8a06-42715f822d0a/Veggie+Wash+Aug+Email',
          '7796d113-d11e-446b-b74c-d53db9e1cf25/Veggie+Wash+July+email'
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
      '5c2f2c80-dec6-4d08-9d8e-7c34d771c6c6/BoldMonk+little+way+mockup.png',
      'b7ba843d-3cb8-47c8-b655-953c71e15c08/_Option2.png',
      '6c308dbb-d3b1-48ec-be14-95dfe4f64de1/_Option1.png',
      '92e87984-3f27-459b-9382-bb69c8e43e11/6074_BM_Statio_12ozCan_20260112_V05_NA-03.png',
      'c872bc4d-fc40-4a28-a12c-144789352aa1/6074_BM_Statio_12ozCan_20260112_V05_NA.png',
      '4a919849-aef7-4880-a665-56e6095c8233/5969_BoldMonk_Confession_12ozcan_20241007_V01_NA-04.png'
    ],
    sections: [
      {
        title: 'The Cans',
        layout: 'slides',
        imgs: [
          '5c2f2c80-dec6-4d08-9d8e-7c34d771c6c6/BoldMonk+little+way+mockup.png',
          '2cde7140-d5e1-40f2-975c-f7f82865f48d/_Option9.png',
          'b7ba843d-3cb8-47c8-b655-953c71e15c08/_Option2.png',
          '6c308dbb-d3b1-48ec-be14-95dfe4f64de1/_Option1.png',
          '1acc9d25-939b-4c36-a664-1ca40b5bba46/6074_BTS_TLW_12ozcans_20250724_V02_NA_Option2.png'
        ]
      },
      {
        title: 'Ideation',
        text: 'The ideation took Bold Monk\'s faith-rooted identity and gave each beer its own concept, logo, and color scheme — drawing names and imagery from monastic and liturgical practice — while keeping the lineup unmistakably one family. Across the range, type, illustration, and palette shift to match both the beer and the spiritual idea behind it: restrained black-and-white for a mindful nonalcoholic brew, weighty blackletter and devotional text for a darker collab, deep liturgical reds and golds for an amber Märzen. A shared structural grid — the Bold Monk header, a monastic icon, the beer name, and "Brewed & Canned in ATL, GA" — ties every can together, so each design stands on its own while reading as part of one devotional system.',
        layout: 'slides',
        imgs: [
          '92e87984-3f27-459b-9382-bb69c8e43e11/6074_BM_Statio_12ozCan_20260112_V05_NA-03.png',
          'c872bc4d-fc40-4a28-a12c-144789352aa1/6074_BM_Statio_12ozCan_20260112_V05_NA.png',
          '4a919849-aef7-4880-a665-56e6095c8233/5969_BoldMonk_Confession_12ozcan_20241007_V01_NA-04.png',
          '241ea147-e5f2-44de-8d00-dc48d459c135/5969_BoldMonk_Confession_12ozcan_20241007_V01_NA-01.png',
          '02c7cc08-6322-4400-a548-d2ebedd5b4dd/6074_BoldMonk_LW_12oz_Cans_20250724_NA_V01-01.png'
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
      '5a094fc8-1ad4-49bf-87e0-ed0c07fa18c5/IFG23_GOTAGA_SCL001_Launch1_instagram_1080x1080.jpg',
      '71342d53-1030-4cfc-930b-f3f34347d98c/GOTAGA_PRF001_Gotaga+Email+Influencer+Launch_Teaser.jpg',
      'e2a44dfd-b48c-4e7a-8713-4011102d46ef/IFG23_GOTAGA_SCL001_Carousel_1080x1080_01.jpg',
      '319c4699-f076-4e4d-9802-9ea634ff1e6c/AX7_PRF_001_+Launch+Email+Assets_Main_1280x1600.jpg',
      'eb63dce4-8359-46ff-9342-d814bc696360/AX7_PRF_001_+Launch+Email+Assets_Presale_1280x1600.jpg',
      '9a9017a7-4efd-4c45-80ff-2f3f15737f79/NICKMERCS_PRF002_Social_Teaser_Release1.jpg'
    ],
    sections: [
      {
        title: 'Gotaga Collection',
        layout: 'slides',
        imgs: [
          'e2a44dfd-b48c-4e7a-8713-4011102d46ef/IFG23_GOTAGA_SCL001_Carousel_1080x1080_01.jpg',
          '71342d53-1030-4cfc-930b-f3f34347d98c/GOTAGA_PRF001_Gotaga+Email+Influencer+Launch_Teaser.jpg',
          'a48bd633-77d8-4bb3-a03e-42d7caa06f37/GOTAGA_PRF001_Gotaga+Email+Influencer+Launch_1280x1280_r1.jpg',
          '5a094fc8-1ad4-49bf-87e0-ed0c07fa18c5/IFG23_GOTAGA_SCL001_Launch1_instagram_1080x1080.jpg'
        ]
      },
      {
        title: 'AX7 Launch',
        layout: 'slides',
        imgs: [
          'a72d88c4-050d-42fc-8a8f-8f4e57492a5f/AX7_PRF_001_+Launch+Email+Assets_Individual_1280x1600.jpg',
          '319c4699-f076-4e4d-9802-9ea634ff1e6c/AX7_PRF_001_+Launch+Email+Assets_Main_1280x1600.jpg',
          'eb63dce4-8359-46ff-9342-d814bc696360/AX7_PRF_001_+Launch+Email+Assets_Presale_1280x1600.jpg'
        ]
      },
      {
        title: 'NICKMERCS Collection',
        layout: 'slides',
        imgs: [
          '9a9017a7-4efd-4c45-80ff-2f3f15737f79/NICKMERCS_PRF002_Social_Teaser_Release1.jpg',
          'cb2db2cb-ed8f-424f-b349-0a8c59686871/NICKMEWERCS_WEB001_WEB+ASSETS_hero1_mb_750x1200.jpg',
          '88bf8283-9555-4f21-acda-c1ad713267be/NICKMERCS_PRF002_Launch_Main_1280x1600.jpg'
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
      'd444d7d7-bb32-4972-9bd1-cea44632c9bc/IFG23_009_Stream_Overlays_TeePee_LiveNowAnnouncement_1080x1920.png',
      'c78f3762-2b52-40de-aaa5-87c886a78b35/IFG23_008_Stream_Overlays_Aydan_Announcements_1080x1920.png',
      'f01b52d7-1a65-471d-8ef2-2336928fb5ca/IFG23_008_Stream_Overlays_Aydan_Announcements_1200x675.png',
      '6bcffde3-95ad-4d5c-a8b7-c73bde1e14d3/IFG23_009_Stream_Overlays_Aydan_LiveNowAnnouncement_1080x1920.png',
      '17df4aaf-a653-4975-8af4-f208761a1f1b/IFG23_009_Stream_Overlays_TeePee_Announcement_1200x675.png',
      '47a4a2bc-94b9-4eed-9742-425c7a5b04da/IFG23_009_Stream_Overlays_Aydan_Webcam.png'
    ],
    sections: [
      {
        title: 'Aydan',
        layout: 'slides',
        imgs: [
          'c78f3762-2b52-40de-aaa5-87c886a78b35/IFG23_008_Stream_Overlays_Aydan_Announcements_1080x1920.png',
          '6bcffde3-95ad-4d5c-a8b7-c73bde1e14d3/IFG23_009_Stream_Overlays_Aydan_LiveNowAnnouncement_1080x1920.png',
          'f01b52d7-1a65-471d-8ef2-2336928fb5ca/IFG23_008_Stream_Overlays_Aydan_Announcements_1200x675.png',
          '47a4a2bc-94b9-4eed-9742-425c7a5b04da/IFG23_009_Stream_Overlays_Aydan_Webcam.png'
        ]
      },
      {
        title: 'TeePee',
        layout: 'slides',
        imgs: [
          'd444d7d7-bb32-4972-9bd1-cea44632c9bc/IFG23_009_Stream_Overlays_TeePee_LiveNowAnnouncement_1080x1920.png',
          '280d8b71-d54b-4642-a582-6f472177ca38/IFG23_009_Stream_Overlays_TeePee_Announcement_1080x1920.png',
          '17df4aaf-a653-4975-8af4-f208761a1f1b/IFG23_009_Stream_Overlays_TeePee_Announcement_1200x675.png'
        ]
      },
      {
        title: 'Intermission Screens',
        layout: 'stack',
        imgs: ['2d19e554-b6ea-4090-8254-c3679be2064b/template.jpg']
      }
    ]
  }
];
