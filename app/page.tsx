import {
  Header,
  HeroSection,
  VideoPlayer,
  Button,
  Footer,
  OurJobButton,
} from "./components";
import styles from "./page.module.css";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <Header />
      <div>
        <HeroSection />
        <div className={styles.readMore}>
          <h3 className="text-2xl">О студии</h3>
          <p>
            текст текст текст текст текст текст текст текст текст текст текст
            текст текст текст текст текст текст текст текст текст текст текст
            текст текст текст текст текст текст текст текст текст текст текст
            текст текст{" "}
          </p>
          <div className="mt-5 w-full pr-7 pl-7">
            <OurJobButton href="/works" text="Читать далее" />
          </div>
        </div>
        <div className={styles.mainVideoPlayer}>
          <VideoPlayer videoSrc="" thumbnailSrc="/big_video_mock.png" />
        </div>
        <div className={styles.ourJobContainer}>
          <Button text="Перейти к нашим работам" href="/works" />
        </div>
      </div>
      <Footer />
    </RootLayout>
  );
}
