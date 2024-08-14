import {
  Facebook,
  Headset,
  InstagramIcon,
  Linkedin,
} from "lucide-react";
export const Footerss = () => {
  return (
    <div className="container">
      <div className="flex flex-wrap justify-center gap-10 items-start">
        <ul>
          <li>
            <a href="#">Мы и наши проекты</a>
          </li>
          <li>
            <a href="#">Команда</a>
          </li>
          <li>
            <a href="#">nFactorial Podcast</a>
          </li>
          <li>
            <a href="#">Наш блог</a>
          </li>
          <li>
            <a href="#">Мастерклассы</a>
          </li>
          <li>
            <a href="#">Вакансии</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Контакты</a>
          </li>
          <li>
            <a href="#">+7 747 621 4500</a>
          </li>
          <li>
            <a href="#">+7 747 621 4500</a>
          </li>
          <li>
            <a href="#">admin@nfactorial.school</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Наши курсы и студенты</a>
          </li>
          <li>
            <a href="#">Все курсы</a>
          </li>
          <li>
            <a href="#">Отзывы студентов</a>
          </li>
          <li>
            <a href="#">Проекты студентов</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Документы</a>
          </li>
          <li>
            <a href="#">Договор публичной оферты</a>
          </li>
          <li>
            <a href="#">Политика обработки персональных данных</a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="flex flex-wrap justify-between gap-10 items-center">
        <p>© 2024 nFactorial School</p>
        <ul className="flex gap-4 mt-10">
          <li>
            <a href="#">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <Facebook />
            </a>
          </li>
          <li>
            <a href="#">
              <Linkedin />
            </a>
          </li>
          <li>
            <a href="#">
              <Headset />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
