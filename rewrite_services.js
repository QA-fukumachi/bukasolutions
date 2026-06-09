const fs = require('fs');
const file = 'services.html';
let content = fs.readFileSync(file, 'utf-8');

// Replace Babyproofing image
content = content.replace(
  '<img src="https://res.cloudinary.com/dkzz5rx9d/image/upload/v1775483770/childproof-your-home_tndzrt.jpg" alt="Babyproofing Services" loading="lazy">',
  '<img src="https://res.cloudinary.com/dkzz5rx9d/image/upload/v1780989649/child_safety_gate_large_ea18rq.jpg" alt="Child Safety Gate Installation and Babyproofing in Boulder CO" loading="lazy">'
);

// Enhance descriptions
const enhancements = [
  {
    find: "<p>We bring expertise and craftsmanship to every kitchen project — whether it's a full remodel, a new sink or faucet installation, or a quick repair. Your kitchen is the heart of your home, and we treat it that way.</p>",
    replace: "<p>We provide expert kitchen remodeling services in Boulder, CO. Whether you need a full custom kitchen renovation, new cabinet installation, sink and faucet plumbing upgrades, or general kitchen repairs, we deliver high-quality craftsmanship to transform the heart of your home.</p>"
  },
  {
    find: "<p>From full bathroom renovations to vanity installs, toilet replacements, and minor fixes, we deliver bathroom work that blends function with style. Our team handles every detail so the space ends up exactly how you want it.</p>",
    replace: "<p>Our Boulder bathroom renovation contractors specialize in complete bathroom remodels, custom vanity installations, tile work, toilet replacements, and plumbing fixture updates. We seamlessly blend functionality with modern style to create your perfect bathroom sanctuary.</p>"
  },
  {
    find: "<p>Drywall repairs, spot painting, trim replacement, TV mounting, mirror hanging — our wall specialists handle it all with precision, leaving every surface clean and seamless.</p>",
    replace: "<p>Trust our local Boulder handymen for flawless drywall repair, professional interior painting, baseboard and trim replacement, secure TV wall mounting, and custom mirror hanging. We ensure perfectly seamless wall finishes for your home.</p>"
  },
  {
    find: "<p>We install luxury vinyl tile, engineered wood, and hardwood flooring. We also handle baseboard replacement, repair, and single-room wood floor refinishing.</p>",
    replace: "<p>Looking for flooring contractors in Boulder? We offer professional flooring installation including luxury vinyl plank (LVP), engineered wood, and solid hardwood floors. We also provide wood floor refinishing and custom baseboard installation.</p>"
  },
  {
    find: "<p>Water heater installation, concrete crack repairs, minor garage door fixes, HVAC filter replacement, and custom organization shelving — we help you get the most out of your garage space.</p>",
    replace: "<p>Maximize your space with our garage improvement services. From water heater installation and concrete crack repairs to custom garage shelving and organization systems, we handle comprehensive garage makeovers in the Boulder area.</p>"
  },
  {
    find: "<p>Exterior and interior door replacements, alignment adjustments, handle swaps, window replacements, and window sill repairs. When your windows and doors work right, your whole home feels tighter and more secure.</p>",
    replace: "<p>Enhance your home's energy efficiency with our professional window and door services in Boulder. We specialize in exterior and interior door replacements, drafty window repairs, hardware installation, and custom window sill restoration.</p>"
  },
  {
    find: "<p>Pergolas, fences, decks, sheds, walkways, French drains, garden beds, chicken coops, sprinkler repairs, and pressure washing — we build and maintain outdoor spaces you'll love spending time in.</p>",
    replace: "<p>Transform your backyard with our expert outdoor living construction. We build custom pergolas, wood decks, privacy fences, and garden sheds in Boulder. We also provide landscaping solutions like French drain installation and pressure washing.</p>"
  },
  {
    find: "<p>Light fixture and ceiling fan replacements, outlet upgrades, smart home installs, smoke detector setups, custom railing fabrication, handrail installation, home gym setup, and quarterly maintenance plans — we keep your home running smoothly year-round.</p>",
    replace: "<p>Your go-to Boulder handyman service for general home repairs and maintenance. We handle electrical fixture and ceiling fan installation, smart home device setup, custom stair railings, home gym assembly, and preventative home maintenance plans.</p>"
  },
  {
    find: "<p>Outlet covers, safety gates, carbon monoxide and smoke detectors, moisture monitors, drawer latches, stove knob covers, furniture wall anchors, and toilet locks. Peace of mind, fully installed.</p>",
    replace: "<p>Ensure your home is safe for little ones with our professional babyproofing services in Boulder, CO. We expertly install child safety gates, secure furniture wall anchors, cabinet locks, outlet covers, and advanced smoke/CO detectors.</p>"
  },
  {
    find: "<p>Buka Solutions now offers custom treehouse builds. With a background in off-grid vans, tiny homes, and alternative living spaces, we bring that same craftsmanship to the treetops. Safety comes first, your vision comes second. Reach out today to start planning your 2026 build.</p>",
    replace: "<p>Buka Solutions is Boulder's premier builder for custom treehouses and backyard play structures. Leveraging our experience in tiny homes and alternative living, we design and construct safe, imaginative, and structurally sound custom treehouses.</p>"
  }
];

enhancements.forEach(enh => {
  content = content.replace(enh.find, enh.replace);
});

fs.writeFileSync(file, content);
console.log('Updated services.html');
