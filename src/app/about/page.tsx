import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

![Samantha](https://i.ibb.co.com/nQHNVJc/Whats-App-Image-2024-06-13-at-12-06-05.jpg)

Hi there, I'm Fachry, though I am often called El. I am 18 years old and work as an investor, trader, and full-stack developer. I created this website to document everything about her ( Suci Nur Insani ) the most beautiful woman I have ever met. She is not only the most beautiful but also the most remarkable and extraordinary woman I have ever known. 
Through this website, I aim to express all my feelings for her and share every detail about her. I hope that my words will convey the depth of my emotions for her.`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Everything about her, the purest and most beautiful woman I have ever met.",
    openGraph: {
      title: "About Me",
      description: "Everything about her, the purest and most beautiful woman I have ever met.",
      images: [
        signOgImageUrl({
          title: "Ywnote",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
