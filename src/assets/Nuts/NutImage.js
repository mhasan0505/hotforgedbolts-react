// ASME B18.2.2 Images
import ASME_diagram from "./ASME B18 2.2/ASME-ANSI-Chart.jpg";
import ASME_main from "./ASME B18 2.2/ASME-B18-.webp";

// DIN 934 Images
import DIN934_diagram from "./Din 934/diagram.png";
import DIN934_main from "./Din 934/din 934_main.webp";
import DIN934_weightChart from "./Din 934/DIN-934_Weight-Chart.jpg";
import DIN934_image1 from "./Din 934/image1.jpg";
import DIN934_image2 from "./Din 934/image2.jpg";
import DIN934_image3 from "./Din 934/image3.jpg";
import DIN934_image4 from "./Din 934/image4.jpg";

// DIN 935 Images
import DIN935_diagram from "./DIN935/DIN-935_DG.jpg";
import DIN935_image1 from "./DIN935/image1.jpg";
import DIN935_image2 from "./DIN935/image2.jpg";
import DIN935_main from "./DIN935/main.webp";
import DIN935_weightChart from "./DIN935/weight cahrt.jpg";

// DIN 6915 Images
import DIN6915_diagram from "./DIN 6915/din-6915_DG.jpg";
import DIN6915_main from "./DIN 6915/din6915_main.jpg";
import DIN6915_image1 from "./DIN 6915/image1.jpg";
import DIN6915_image2 from "./DIN 6915/image2.png";
import DIN6915_weightChart from "./DIN 6915/weight chart.jpg";

// DIN 936 Images
import DIN936_diagram from "./DIN936/din-936_DG.jpg";
import DIN936_main from "./DIN936/main.jpg";
import DIN936_weightChart from "./DIN936/weight cahrt.jpg";

// Export objects for each nut type
export const ASME_image = {
  main: ASME_main,
  diagram: ASME_diagram,
};

export const NutImagesDin934 = {
  gallery: [
    { src: DIN934_image1, alt: "DIN 934 Gallery 1" },
    { src: DIN934_image2, alt: "DIN 934 Gallery 2" },
    { src: DIN934_image3, alt: "DIN 934 Gallery 3" },
    { src: DIN934_image4, alt: "DIN 934 Gallery 4" },
  ],
  weightChart: DIN934_weightChart,
  mainImage: DIN934_main,
  diagram: DIN934_diagram,
};

export const DIN935_image = {
  main: DIN935_main,
  diagram: DIN935_diagram,
  image1: DIN935_image1,
  image2: DIN935_image2,
  weightChart: DIN935_weightChart,
};

export const DIN6915_image = {
  main: DIN6915_main,
  diagram: DIN6915_diagram,
  image1: DIN6915_image1,
  image2: DIN6915_image2,
  weightChart: DIN6915_weightChart,
};

export const DIN936_image = {
  main: DIN936_main,
  diagram: DIN936_diagram,
  weightChart: DIN936_weightChart,
};

export const NutImagesDin6915 = {
  gallery: [
    { src: DIN6915_image1, alt: "DIN 6915 Gallery 1" },
    { src: DIN6915_image2, alt: "DIN 6915 Gallery 2" },
  ],
  weightChart: DIN6915_weightChart,
  mainImage: DIN6915_main,
  diagram: DIN6915_diagram,
};

export const NutImagesDin935 = {
  gallery: [
    { src: DIN935_image1, alt: "DIN 935 Gallery 1" },
    { src: DIN935_image2, alt: "DIN 935 Gallery 2" },
  ],
  weightChart: DIN935_weightChart,
  mainImage: DIN935_main,
  diagram: DIN935_diagram,
};
