import Instagram from '@/assets/icons/instagram.svg'
import Facebook from '@/assets/icons/facebook.svg'
import Linkedin from '@/assets/icons/linked.svg'
import Telegram from '@/assets/icons/telegram.svg'

const footerLinks = [
  {
    title: "Мы и наши проекты",
    links: ["Команда", "nFactorial Podcast", "Наш блог", "Мастерклассы", "Вакансии"]
  },
  {
    title: "Контакты",
    links: ["+7 747 621 4500", "+7 747 621 4500", "admin@nfactorial.school"]
  },
  {
    title: "Наши курсы и студенты",
    links: ["Все курсы", "Отзывы студентов", "Проекты студентов"]
  },
  {
    title: "Документы",
    links: ["Договор публичной оферты", "Политика обработки персональных данных"]
  }
];

const socialMedia = [
  { src: Instagram, alt: "instagram" },
  { src: Facebook, alt: "facebook" },
  { src: Linkedin, alt: "Linkedin" },
  { src: Telegram, alt: "telegram" }
];

export const Footerss = () => {
  return (
    <div className="container-xl sm:container">
      <div className="flex flex-wrap sm:justify-center gap-10 items-start mb-10 sm:gap-14 ">
       {footerLinks.map((sections, index)=>(
        <ul key={index} className='sm:max-w-[220px] max-w-md sm:ml-0 ml-10 text-wrap'>
          <li>
            <a href="#" className='sm:text-lg font-semibold text-black text-md'>{sections.title}</a>
          </li>
         {sections.links.map((link, subIndex)=>(
          <li key={subIndex}>
            <a href="#" className='text-md sm:text-lg font-semibold opacity-80'>{link}</a>
          </li>
         ))}
        </ul>
       ))}
      </div>
      <hr />
      <div className="flex flex-wrap justify-between gap-10 items-center mt-10 mx-10">
        <p className="text-lg font-medium opacity-85">© 2024 Robotics lab School</p>
        <ul className="flex gap-4">
          {socialMedia.map((icon, index)=>(
            <li key={index}>
              <a href="#">
                <img src={icon.src} alt={icon.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
