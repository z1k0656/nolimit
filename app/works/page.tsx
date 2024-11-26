// app/works/page.tsx
import { WorksSection, DynamicMediaSection } from "../components";

export default function Works() {
  return (
    <>
      <WorksSection />
      <div style={{ height: "500vh" }}>
        <section id="3d-clips">
          {/* <DynamicMediaSection
            title="3D ролики"
            description="Мы создаем впечатляющие 3D ролики, которые оживляют Ваши идеи и привлекают внимание аудитории."
            photos={["/3D-Movies/thumbnail.png"]}
            buttonText="Подробнее о создании 3D роликов"
            buttonHref="works/3d-clips"
          /> */}
        </section>
        <section id="graphic-design">
          {/* <DynamicMediaSection
            title="Графический дизайн"
            description="Наши работы в графическом дизайне подчеркивают уникальность каждого проекта и отражают индивидуальность наших клиентов."
            photos={[
              "/Graphic-Design/thumbnail-1.png",
              "/Graphic-Design/thumbnail-2.png",
            ]}
            buttonText="Подробнее о создании графического дизайна"
            buttonHref="works/graphic-design"
          /> */}
        </section>
        <section id="led-screens">
          {/* <DynamicMediaSection
            title="LED экраны"
            description="LED экраны одна из самых важных составляющих мероприятия. Они задают настроение мероприятия и подчеркивает высокий уровень его организации. Красочная и динамичная графика на LED экранах делает ваше событие ярким и незабываемым"
            photos={["/LED-Displays/thumbnail.png"]}
            buttonText="Подробнее о создании LED экранов"
            buttonHref="works/led-screens"
          /> */}
        </section>
        <section id="motion-design">
          {/* <DynamicMediaSection
            title="Моушн дизайн"
            description="Мы создаем захватывающие музыкальные ролики с комплексной анимацией, которые идеально сочетают звук и визуальные эффекты. Эти ролики привлекают внимание через креативные и динамичные визуальные решения"
            photos={["/Motion-Design/thumbnail.png"]}
            buttonText="Подробнее о создании моушн дизайна"
            buttonHref="works/motion-design"
          /> */}
        </section>
        <section id="visualization">
          {/* <DynamicMediaSection
            title="Стенды и визуализация"
            description="Профессиональный монтаж, который захватывает внимание зрителей"
            photos={["/Visualization/thumbnail.png"]}
            buttonText="Подробнее о стендах и визуализации"
            buttonHref="works/visualization"
          /> */}
        </section>
        <section id="uXuI">
          {/* <DynamicMediaSection
            title="UX/UI"
            description="Текст текст текст текст текст текст текст текст текст текст тест текст текст текст текст текст текст текст текст текст текст текст"
            photos={["/UX-UI/thumbnail.png"]}
            buttonText="Подробнее о UX/UI"
            buttonHref="works/ux-ui"
          /> */}
        </section>
      </div>
    </>
  );
}
