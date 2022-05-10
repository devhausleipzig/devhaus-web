export interface Offer {
  heading: string;
  about: string[];
  jobDescription: string;
  requirements: string[];
  specificKnowledge: {
    minimum: string;
    niceToHave: string;
  };
  whatWeOffer: string[];
  url: string;
}
