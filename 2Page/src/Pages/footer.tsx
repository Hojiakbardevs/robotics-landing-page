export const Footerss = () => {
  return (
    <div className="container">
      <div className="flex flex-wrap justify-center gap-10 items-start mb-10">
        <ul className="max-w-[220px]">
          <li>
            <a className="text-md font-semibold" href="#">Мы и наши проекты</a>
          </li>
          <li>
            <a className="text-md font-semibold opacity-85" href="#">Команда</a>
          </li>
          <li>
            <a className="text-md font-semibold opacity-85" href="#">nFactorial Podcast</a>
          </li>
          <li>
            <a className="text-md font-semibold opacity-85" href="#">Наш блог</a>
          </li>
          <li>
            <a className="text-md font-semibold opacity-85" href="#">Мастерклассы</a>
          </li>
          <li>
            <a className="text-md font-semibold opacity-85" href="#">Вакансии</a>
          </li>
        </ul>
        <ul  className="max-w-[220px]">
          <li>
            <a className="text-md font-semibold" href="#">Контакты</a>
          </li>
          <li>
            <a className="text-md font-semibold opacity-85" href="#">+7 747 621 4500</a>
          </li>
          <li>
            <a className="text-md font-semibold opacity-85" href="#">+7 747 621 4500</a>
          </li>
          <li>
            <a className="text-md font-semibold opacity-85" href="#">admin@nfactorial.school</a>
          </li>
        </ul>
        <ul  className="max-w-[220px]">
          <li>
            <a className="text-md font-semibold" href="#">Наши курсы и студенты</a>
          </li>
          <li>
            <a className="text-md font-semibold opacity-85" href="#">Все курсы</a>
          </li>
          <li>
            <a className="text-md font-semibold opacity-85" href="#">Отзывы студентов</a>
          </li>
          <li>
            <a className="text-md font-semibold opacity-85" href="#">Проекты студентов</a>
          </li>
        </ul>
        <ul  className="max-w-[220px]">
          <li>
            <a  className="text-md font-semibold"href="#">Документы</a>
          </li>
          <li>
            <a className="text-md font-semibold opacity-85" href="#">Договор публичной оферты</a>
          </li>
          <li>
            <a className="text-md font-semibold opacity-85" href="#">Политика обработки персональных данных</a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="flex flex-wrap justify-between gap-10 items-center mt-10">
        <p className="text-sm font-medium opacity-85">© 2024 nFactorial School</p>
        <ul className="flex gap-4">
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.9927 6.02291C26.5972 6.62721 27.0689 7.35108 27.3776 8.14817C27.7335 9.09383 27.9234 10.0939 27.9389 11.1042C28.0136 12.3802 28.0136 12.7935 28.0136 16.0508C28.0136 19.3082 27.9963 19.7148 27.9389 20.9975C27.9189 21.9948 27.7309 22.9788 27.3803 23.9122C27.0712 24.7092 26.5994 25.433 25.9949 26.0375C25.3904 26.6419 24.6666 27.1138 23.8696 27.4228C22.9366 27.7723 21.9511 27.9612 20.9549 27.9815C19.6816 28.0548 19.2643 28.0548 16.0083 28.0548C12.7523 28.0548 12.3456 28.0375 11.0616 27.9815C10.0634 27.9487 9.07818 27.7458 8.14826 27.3815C7.35102 27.0729 6.6269 26.6015 6.02218 25.9972C5.41746 25.3929 4.94543 24.6692 4.63626 23.8722C4.2856 22.9375 4.0976 21.9535 4.0776 20.9562C4.00293 19.6802 4.00293 19.2655 4.00293 16.0095C4.00293 12.7522 4.02026 12.3455 4.0776 11.0628C4.09708 10.0666 4.286 9.08099 4.63626 8.14817C4.94457 7.35087 5.41613 6.62682 6.02071 6.02247C6.62528 5.41813 7.34951 4.94684 8.14693 4.63884C9.07861 4.28764 10.0634 4.09824 11.0589 4.07884C12.3323 4.00684 12.7496 4.00684 16.0056 4.00684C19.2616 4.00684 19.6683 4.02284 20.9523 4.07884C21.9485 4.09929 22.934 4.28865 23.8669 4.63884C24.6641 4.9472 25.3882 5.41862 25.9927 6.02291ZM25.3389 23.1082C25.6047 22.3871 25.745 21.6259 25.7536 20.8575V20.8588H25.7683C25.8256 19.5842 25.8256 19.2348 25.8256 15.9868C25.8256 12.7375 25.8109 12.3815 25.7536 11.1135C25.7412 10.3537 25.601 9.60143 25.3389 8.88817C25.1386 8.3696 24.832 7.89865 24.4389 7.50554C24.0458 7.11244 23.5748 6.80587 23.0563 6.6055C22.3434 6.34026 21.5901 6.19998 20.8296 6.19084C19.5403 6.1175 19.2069 6.1175 15.9576 6.1175C12.7083 6.1175 12.3523 6.1335 11.0843 6.19084C10.3243 6.20145 9.57172 6.34169 8.85893 6.6055C7.80693 7.00817 6.9736 7.83617 6.56693 8.88817C6.30114 9.60873 6.16088 10.3695 6.15226 11.1375C6.0816 12.4295 6.0816 12.7615 6.0816 16.0108C6.0816 19.2588 6.09493 19.6162 6.15226 20.8828C6.16468 21.6426 6.30486 22.3949 6.56693 23.1082C6.76804 23.6277 7.07597 24.0991 7.47078 24.4921C7.8656 24.8851 8.33851 25.1908 8.85893 25.3895C9.57136 25.6546 10.3242 25.7949 11.0843 25.8042C12.3749 25.8775 12.7069 25.8775 15.9576 25.8775C19.2056 25.8775 19.5629 25.8628 20.8296 25.8042C21.5901 25.7944 22.3432 25.6541 23.0563 25.3895C23.5749 25.1896 24.0459 24.8833 24.439 24.4904C24.8322 24.0975 25.1387 23.6267 25.3389 23.1082ZM22.409 11.0469C23.2028 11.0469 23.8463 10.4033 23.8463 9.60953C23.8463 8.81572 23.2028 8.1722 22.409 8.1722C21.6152 8.1722 20.9717 8.81572 20.9717 9.60953C20.9717 10.4033 21.6152 11.0469 22.409 11.0469ZM15.999 9.83626C14.3638 9.83626 12.7957 10.4858 11.6394 11.642C10.4832 12.7983 9.83366 14.3664 9.83366 16.0016C9.83366 17.6367 10.4832 19.2049 11.6394 20.3611C12.7957 21.5174 14.3638 22.1669 15.999 22.1669C17.6341 22.1669 19.2023 21.5174 20.3585 20.3611C21.5148 19.2049 22.1643 17.6367 22.1643 16.0016C22.1643 14.3664 21.5148 12.7983 20.3585 11.642C19.2023 10.4858 17.6341 9.83626 15.999 9.83626ZM15.999 20.0056C14.9367 20.0056 13.9179 19.5836 13.1668 18.8325C12.4156 18.0813 11.9937 17.0625 11.9937 16.0003C11.9937 14.938 12.4156 13.9192 13.1668 13.1681C13.9179 12.4169 14.9367 11.9949 15.999 11.9949C17.0613 11.9949 18.08 12.4169 18.8312 13.1681C19.5823 13.9192 20.0043 14.938 20.0043 16.0003C20.0043 17.0625 19.5823 18.0813 18.8312 18.8325C18.08 19.5836 17.0613 20.0056 15.999 20.0056Z"
                  fill="black"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.6693 4.15459V7.73257L20.4931 7.7381C18.7873 7.7381 18.4586 8.5289 18.4586 9.68472V12.2451H22.522L21.9949 16.249H18.4586V26.6677H14.2202V16.249H10.672V12.2451H14.2202V9.2921C14.2202 5.8634 16.3618 3.99423 19.5014 3.99423C20.9981 3.99423 22.2896 4.10483 22.6693 4.1546V4.15459Z"
                  fill="black"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.78399 26.6672H10.4641V11.5562H5.78399V26.6672ZM8.1016 9.57685C6.57281 9.57685 5.33398 8.32828 5.33398 6.78845C5.33398 5.24856 6.57281 4 8.1016 4C9.6304 4 10.8685 5.24856 10.8685 6.78845C10.8685 8.32828 9.6304 9.57685 8.1016 9.57685ZM28.0003 26.667H23.3431V18.7347C23.3431 16.5598 22.5167 15.3445 20.7953 15.3445C18.9227 15.3445 17.9443 16.6092 17.9443 18.7347V26.667H13.4561V11.556H17.9443V13.5915C17.9443 13.5915 19.2939 11.0943 22.5005 11.0943C25.7056 11.0943 28.0003 13.0516 28.0003 17.0996L28.0003 26.667Z"
                  fill="black"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none">
                <path
                  d="M9.63828 18.4064L3.54064 16.3547C3.54064 16.3547 2.8119 16.0494 3.04655 15.357C3.09486 15.2143 3.1923 15.0928 3.4838 14.884C4.83487 13.9115 28.4911 5.13089 28.4911 5.13089C28.4911 5.13089 29.159 4.89846 29.553 5.05306C29.6504 5.08421 29.7381 5.14154 29.8071 5.21917C29.876 5.29681 29.9238 5.39197 29.9455 5.49492C29.988 5.67675 30.0058 5.86382 29.9983 6.05073C29.9965 6.21242 29.9775 6.36229 29.9631 6.5973C29.8191 8.99795 25.5074 26.9148 25.5074 26.9148C25.5074 26.9148 25.2495 27.9632 24.3252 27.9991C24.0981 28.0067 23.8718 27.9669 23.6599 27.8823C23.4479 27.7976 23.2547 27.6697 23.0916 27.5063C21.2779 25.8952 15.0091 21.5445 13.6238 20.5877C13.5926 20.5657 13.5663 20.5371 13.5467 20.5037C13.5271 20.4703 13.5146 20.433 13.5102 20.3942C13.4908 20.2934 13.597 20.1684 13.597 20.1684C13.597 20.1684 24.5126 10.1487 24.8031 9.09686C24.8256 9.01536 24.7406 8.97516 24.6265 9.01085C23.9015 9.28629 11.3335 17.4825 9.94644 18.387C9.84659 18.4182 9.74106 18.4249 9.63828 18.4064Z"
                  fill="black"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
