import React from "react";
import "./Home.css";
import Cards from "../../components/cards/Cards";
import Footer from "../../components/footer/Footer";
import { apartmentList } from "../../Dummy/AppData";

import banner from "../../assets/homepage_mats/city-flat.jpg";

export default function Home() {
  return (
    <div className="_home">
      <section className="landingpage" id="home">
        <img src={banner} alt="" />
        <div className="container d-flex align-items-center mb-5 title_container">
          <div className="lp-alignment">
            {/* <img
                src={Logo}
                srcSet={`${Logo} 1x, ${Logo} 2x, ${Logo} 3x`}
                alt="Logo"
              /> */}
            <h1 className="_title_">TownLofts</h1>
            <span className="_title_small_">
              <small>am</small>{" "}
              <span className="special_span">borussia-park</span>
            </span>
          </div>
        </div>
      </section>

      {apartmentList && (
        <div className="_cards_container" id="properties">
          <div className="cards_layer"></div>
          <p className="title">Unsere Apartments</p>
          <div className="card_ctr">
            {apartmentList?.map((card, i) => (
              <Cards card={card} key={i} type={"normal"} />
            ))}
          </div>
        </div>
      )}
      <section className="_search_container">
        <div className="search_ctr">
          <div className="img_ctr">
            <div className="_floating_img">
              <div className="floating_boxes">
                <div className="guy_box">
                  <img
                    className="img-circle"
                    src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                    alt=""
                  />
                  <p>
                    Tauchen Sie ein in den Luxus des Lebens in diesem prächtigen
                    Anwesen, das Eleganz nahtlos vereint.
                  </p>
                </div>
                <div className="girl_box">
                  <img src="https://i.ibb.co/8x9xK4H/team.jpg" alt="" />
                  <p>Hallo! Ich möchte mieten.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="search_content">
            <div className="_content">
              <div className="search_title">
                <h1>
                  Reservieren <span>und relaxen</span> !
                </h1>
              </div>
              <div className="search_description">
                <p>
                  Willkommen in unseren charmanten Apartments im Herzen von
                  Mönchengladbach, Nordrhein-Westfalen, Deutschland. Mit
                  modernen Annehmlichkeiten und einer gemütlichen Atmosphäre
                  bieten unsere Unterkünfte den perfekten Rückzugsort für Ihren
                  Aufenthalt. Dank der günstigen Lage in der Nähe von
                  Sehenswürdigkeiten und öffentlichen Verkehrsmitteln bieten
                  unsere Apartments einfachen Zugang zu allem, was die Stadt zu
                  bieten hat. Buchen Sie Ihren Aufenthalt bei uns und erleben
                  Sie Komfort, Bequemlichkeit und Gastfreundschaft wie nie
                  zuvor.
                </p>
              </div>
              {/* <div className="search_boxes">
                  <div className="_box" title="Searching for houses">
                    <div className="icon">
                      <svg
                        viewBox="0 0 79 92"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_1_204)">
                          <path
                            d="M56.9263 38.2476V51H46.0737V38.2476C46.0737 36.7982 46.6454 35.408 47.663 34.3831C48.6807 33.3582 50.0609 32.7824 51.5 32.7824C52.9391 32.7824 54.3193 33.3582 55.337 34.3831C56.3546 35.408 56.9263 36.7982 56.9263 38.2476ZM74.2 14.8744L52.4948 0.300291C52.1995 0.104401 51.8536 0 51.5 0C51.1464 0 50.8005 0.104401 50.5052 0.300291L28.8 14.8744C28.4792 15.0915 28.2359 15.4063 28.1057 15.7728C27.9755 16.1393 27.9653 16.5381 28.0765 16.9109C28.1878 17.2836 28.4146 17.6107 28.7238 17.8442C29.033 18.0776 29.4084 18.2052 29.7948 18.2082H31.6036V45.5347C31.6036 46.9842 32.1753 48.3743 33.1929 49.3993C34.2105 50.4242 35.5907 51 37.0299 51H42.4562V38.2476C42.4562 35.8318 43.409 33.515 45.105 31.8067C46.8011 30.0985 49.1014 29.1388 51.5 29.1388C53.8986 29.1388 56.1989 30.0985 57.895 31.8067C59.591 33.515 60.5438 35.8318 60.5438 38.2476V51H65.9701C67.4093 51 68.7895 50.4242 69.8071 49.3993C70.8247 48.3743 71.3964 46.9842 71.3964 45.5347V18.2082H73.2052C73.5916 18.2052 73.967 18.0776 74.2762 17.8442C74.5854 17.6107 74.8122 17.2836 74.9235 16.9109C75.0347 16.5381 75.0245 16.1393 74.8943 15.7728C74.7641 15.4063 74.5208 15.0915 74.2 14.8744Z"
                            fill="url(#paint0_linear_1_204)"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_1_204"
                            x="0.6"
                            y={0}
                            width="77.8"
                            height="91.4"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity={0}
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dx={-12} dy={25} />
                            <feGaussianBlur stdDeviation="7.7" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_1_204"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_1_204"
                              result="shape"
                            />
                          </filter>
                          <linearGradient
                            id="paint0_linear_1_204"
                            x1="66.2823"
                            y1="39.8049"
                            x2="35.3096"
                            y2="11.4916"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#07D25F" />
                            <stop offset={1} stopColor="#028139" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <p>Searching for houses</p>
                  </div>
                  <div className="_box" title="Create you profile">
                  
                    <div className="icon">
                      <svg
                        viewBox="0 0 80 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_484_2)">
                          <path
                            d="M55.8681 22.9418C56.5119 21.8203 56.9377 20.6365 57.1038 19.5669C57.5711 19.5254 58.1942 18.8712 58.8588 16.5036C59.7207 13.4714 58.9211 12.8691 58.1319 12.8691C58.2046 12.6095 58.2669 12.3499 58.3188 12.1007C59.6999 3.74138 55.5877 3.45062 55.5877 3.45062C55.5877 3.45062 54.9024 2.14221 53.1059 1.14532C51.9013 0.428811 50.2295 -0.121553 48.0177 0.0653633C47.3011 0.0965159 46.6262 0.241895 45.9927 0.449579C45.1828 0.719569 44.4351 1.12455 43.7601 1.59184C42.9294 2.12144 42.1506 2.75488 41.4652 3.49215C40.3749 4.60327 39.3988 6.04667 38.9834 7.84314C38.6303 9.18271 38.7134 10.5846 39.0042 12.0903C39.0561 12.3499 39.1184 12.6095 39.1911 12.8691C38.4226 12.8899 37.6542 13.5233 38.5057 16.5036C39.1703 18.8608 39.7934 19.5254 40.2606 19.5669C40.4268 20.6365 40.8422 21.8203 41.4964 22.9418V27.1474C41.4756 27.3032 41.3925 27.4382 41.2575 27.5005C40.053 28.0924 34.1132 31.0934 28.5992 35.6209C27.5919 36.4413 27 37.677 27 38.975V42.8795C27 44.0944 27.9865 45.0809 29.2015 45.0809H57.9242C54.9751 42.6095 53.0955 38.8919 53.0955 34.7486C53.0955 31.6749 54.134 28.84 55.8681 26.5659V22.9418Z"
                            fill="url(#paint0_linear_484_2)"
                          />
                        </g>
                        <g filter="url(#filter1_d_484_2)">
                          <path
                            d="M66.626 24.3333C60.8939 24.3333 56.2522 28.975 56.2522 34.7071C56.2522 40.4392 60.9043 45.0809 66.626 45.0809C72.3581 45.0809 76.9999 40.4392 76.9999 34.7071C76.9999 28.975 72.3581 24.3333 66.626 24.3333ZM71.6935 36.1193H68.0383V39.7746H65.2242V36.1193H61.5689V33.3052H65.2242V29.65H68.0383V33.3052H71.6935V36.1193Z"
                            fill="url(#paint1_linear_484_2)"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_484_2"
                            x={0}
                            y="0.0285645"
                            width="62.2312"
                            height="85.0524"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity={0}
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dx={-12} dy={25} />
                            <feGaussianBlur stdDeviation="7.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_484_2"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_484_2"
                              result="shape"
                            />
                          </filter>
                          <filter
                            id="filter1_d_484_2"
                            x="29.2522"
                            y="24.3333"
                            width="50.7477"
                            height="60.7477"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity={0}
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dx={-12} dy={25} />
                            <feGaussianBlur stdDeviation="7.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.0156863 0 0 0 0 0.341176 0 0 0 0 0.972549 0 0 0 0.1 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_484_2"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_484_2"
                              result="shape"
                            />
                          </filter>
                          <linearGradient
                            id="paint0_linear_484_2"
                            x1="53.2528"
                            y1="35.1914"
                            x2="27.3221"
                            y2="16.7898"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#07D25F" />
                            <stop offset={1} stopColor="#028139" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_484_2"
                            x1="73.1515"
                            y1="40.5265"
                            x2="60.5009"
                            y2="27.978"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#07D25F" />
                            <stop offset={1} stopColor="#028139" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <p>Create you profile</p>
                  </div>
                  <div className="_box" title="Deal and pay">

                    <div className="icon">
                      <svg
                        viewBox="0 0 84 81"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_1_216)">
                          <path
                            d="M75.3042 0H32.6958C29.5553 0 27 2.5351 27 5.65074V8.46719V17.2847V35.3493C27 38.4649 29.5553 41 32.6958 41H75.3042C78.4447 41 81 38.4649 81 35.3493V17.2847V8.46779V5.65134C81 2.5351 78.4447 0 75.3042 0ZM74.8761 32.6101H70.0796C69.5832 32.6101 69.1803 32.211 69.1803 31.7179C69.1803 31.2248 69.5832 30.8257 70.0796 30.8257H74.8761C75.3725 30.8257 75.7754 31.2248 75.7754 31.7179C75.7754 32.211 75.3725 32.6101 74.8761 32.6101ZM49.8942 24.1221H34.9052C34.4088 24.1221 34.0059 23.723 34.0059 23.2299C34.0059 22.7368 34.4088 22.3377 34.9052 22.3377H49.8942C50.3906 22.3377 50.7936 22.7368 50.7936 23.2299C50.7936 23.723 50.3906 24.1221 49.8942 24.1221ZM50.7936 31.7179C50.7936 32.211 50.3906 32.6101 49.8942 32.6101H45.0977C44.6013 32.6101 44.1984 32.211 44.1984 31.7179C44.1984 31.2248 44.6013 30.8257 45.0977 30.8257H49.8942C50.3906 30.8257 50.7936 31.2254 50.7936 31.7179ZM52.3926 31.7179C52.3926 31.2248 52.7955 30.8257 53.2919 30.8257H58.0884C58.5848 30.8257 58.9877 31.2248 58.9877 31.7179C58.9877 32.211 58.5848 32.6101 58.0884 32.6101H53.2919C52.7955 32.6101 52.3926 32.211 52.3926 31.7179ZM60.7864 31.7179C60.7864 31.2248 61.1893 30.8257 61.6858 30.8257H66.4823C66.9787 30.8257 67.3816 31.2248 67.3816 31.7179C67.3816 32.211 66.9787 32.6101 66.4823 32.6101H61.6858C61.1893 32.6101 60.7864 32.211 60.7864 31.7179ZM79.2013 16.3931H28.7987V9.36001H79.2013V16.3931Z"
                            fill="url(#paint0_linear_1_216)"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_1_216"
                            x={0}
                            y={0}
                            width={84}
                            height={81}
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity={0}
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dx={-12} dy={25} />
                            <feGaussianBlur stdDeviation="7.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.0486109 0 0 0 0 0.0486109 0 0 0 0 0.0486109 0 0 0 0.1 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_1_216"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_1_216"
                              result="shape"
                            />
                          </filter>
                          <linearGradient
                            id="paint0_linear_1_216"
                            x1="70.9839"
                            y1={32}
                            x2="46.8512"
                            y2="0.471887"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#07D25F" />
                            <stop offset={1} stopColor="#028139" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <p>deal and pay</p>
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* <div className="_testimonial_container" id="testimonails">
        <p>Referenzen</p>
        <div className="testo_ctr">
          <TestimonialsSlider />
        </div>
      </div> */}
      <div className="_socials_container" id="followus">
        <div className="socials_ctr">
          <div className="join_flower_ctr">
            <div className="join_ctr">
              <div className="join_title">
                <span>Treten Sie uns bei</span>
              </div>
              <h5>
                Bleiben Sie mit uns in Verbindung! Folgen Sie uns auf Social
                Media, um stets über unsere neuesten Updates informiert zu
                bleiben.
              </h5>
              <p>
                Eingebettet in eine ruhige Nachbarschaft, bietet dieses Zuhause
                luxuriöse Annehmlichkeiten und exquisites Design. Vom prächtigen
                Eingang bis zu den sorgfältig gestalteten Innenräumen strahlt
                jedes Detail Eleganz aus. Unterhalten Sie Ihre Gäste in den
                großzügigen Wohnbereichen oder ziehen Sie sich in den ruhigen
                Komfort der privaten Schlafzimmer zurück. Genießen Sie
                entspannte Spaziergänge durch wunderschön angelegte Gärten oder
                entspannen Sie in den luxuriösen, spa-ähnlichen Badezimmern.
                Erleben Sie das Höchstmaß an raffiniertem Wohnen in diesem
                außergewöhnlichen Rückzugsort.
              </p>
            </div>
            <div className="flower_ctr">
              <div className="_flower_box">
                <div className="leaf leaf_hover" id="leaf1">
                  <svg
                    width="50"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_243)">
                      <path
                        d="M70 35C70 52.4699 57.2004 66.9498 40.4688 69.5748V45.1172H48.624L50.1758 35H40.4688V28.4348C40.4688 25.6662 41.825 22.9688 46.1727 22.9688H50.5859V14.3555C50.5859 14.3555 46.5801 13.6719 42.7506 13.6719C34.7566 13.6719 29.5312 18.5172 29.5312 27.2891V35H20.6445V45.1172H29.5312V69.5748C12.7996 66.9498 0 52.4699 0 35C0 15.6707 15.6707 0 35 0C54.3293 0 70 15.6707 70 35Z"
                        fill="#1877F2"
                      />
                      <path
                        d="M48.624 45.1172L50.1758 35H40.4688V28.4346C40.4688 25.6668 41.8247 22.9688 46.1725 22.9688H50.5859V14.3555C50.5859 14.3555 46.5806 13.6719 42.7513 13.6719C34.7565 13.6719 29.5312 18.5172 29.5312 27.2891V35H20.6445V45.1172H29.5312V69.5747C31.3132 69.8543 33.1395 70 35 70C36.8605 70 38.6868 69.8543 40.4688 69.5747V45.1172H48.624Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_243">
                        <rect width="70" height="70" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="leaf leaf_hover" id="leaf2">
                  <svg
                    width="50"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_331)">
                      <path
                        d="M3.75001 4.08249C-0.96499 8.97999 9.86457e-06 14.1825 9.86457e-06 29.9875C9.86457e-06 43.1125 -2.28999 56.27 9.69501 59.3675C13.4375 60.33 46.5975 60.33 50.335 59.3625C55.325 58.075 59.385 54.0275 59.94 46.97C60.0175 45.985 60.0175 14.0075 59.9375 13.0025C59.3475 5.48499 54.72 1.15249 48.6225 0.274994C47.225 0.0724939 46.945 0.0124939 39.775 -6.07967e-06C14.3425 0.0124939 8.76751 -1.12001 3.75001 4.08249Z"
                        fill="url(#paint0_linear_1_331)"
                      />
                      <path
                        d="M29.995 7.84755C20.9175 7.84755 12.2975 7.04005 9.00499 15.4901C7.64499 18.9801 7.84249 23.5126 7.84249 30.0026C7.84249 35.6976 7.65999 41.0501 9.00499 44.5126C12.29 52.9676 20.98 52.1576 29.99 52.1576C38.6825 52.1576 47.645 53.0626 50.9775 44.5126C52.34 40.9876 52.14 36.5226 52.14 30.0026C52.14 21.3476 52.6175 15.7601 48.42 11.5651C44.17 7.31505 38.4225 7.84755 29.985 7.84755H29.995ZM28.01 11.8401C46.945 11.8101 49.355 9.70506 48.025 38.9476C47.5525 49.2901 39.6775 48.1551 29.9975 48.1551C12.3475 48.1551 11.84 47.6501 11.84 29.9926C11.84 12.1301 13.24 11.8501 28.01 11.8351V11.8401ZM41.82 15.5176C40.3525 15.5176 39.1625 16.7076 39.1625 18.1751C39.1625 19.6426 40.3525 20.8326 41.82 20.8326C43.2875 20.8326 44.4775 19.6426 44.4775 18.1751C44.4775 16.7076 43.2875 15.5176 41.82 15.5176ZM29.995 18.6251C23.7125 18.6251 18.62 23.7201 18.62 30.0026C18.62 36.2851 23.7125 41.3776 29.995 41.3776C36.2775 41.3776 41.3675 36.2851 41.3675 30.0026C41.3675 23.7201 36.2775 18.6251 29.995 18.6251ZM29.995 22.6176C39.7575 22.6176 39.77 37.3876 29.995 37.3876C20.235 37.3876 20.22 22.6176 29.995 22.6176Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_331"
                        x1="3.86506"
                        y1="56.1677"
                        x2="59.6287"
                        y2="7.90493"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFDD55" />
                        <stop offset="0.5" stopColor="#FF543E" />
                        <stop offset="1" stopColor="#C837AB" />
                      </linearGradient>
                      <clipPath id="clip0_1_331">
                        <rect width="60" height="60" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="leaf" id="leaf3"></div>
                <div className="leaf leaf_hover" id="leaf4">
                  <svg
                    width="50"
                    height="66"
                    viewBox="0 0 66 66"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_334)">
                      <path
                        d="M33 66C51.2254 66 66 51.2254 66 33C66 14.7746 51.2254 0 33 0C14.7746 0 0 14.7746 0 33C0 51.2254 14.7746 66 33 66Z"
                        fill="#FF0000"
                      />
                      <path
                        d="M43.7988 20.5859H22.2012C21.3381 20.5859 20.4835 20.756 19.6861 21.0864C18.8888 21.4169 18.1644 21.9012 17.5543 22.5117C16.9441 23.1222 16.4603 23.8469 16.1304 24.6445C15.8005 25.442 15.631 26.2968 15.6316 27.1599V38.8401C15.631 39.7032 15.8005 40.558 16.1304 41.3556C16.4603 42.1531 16.9441 42.8779 17.5543 43.4884C18.1644 44.0989 18.8888 44.5832 19.6861 44.9136C20.4835 45.244 21.3381 45.4141 22.2012 45.4141H43.7988C44.6619 45.4141 45.5166 45.244 46.3139 44.9136C47.1113 44.5832 47.8357 44.0989 48.4458 43.4884C49.0559 42.8779 49.5397 42.1531 49.8696 41.3556C50.1995 40.558 50.369 39.7032 50.3684 38.8401V27.1599C50.369 26.2968 50.1995 25.442 49.8696 24.6445C49.5397 23.8469 49.0559 23.1222 48.4458 22.5117C47.8357 21.9012 47.1113 21.4169 46.3139 21.0864C45.5166 20.756 44.6619 20.5859 43.7988 20.5859ZM28.4234 38.3234V27.6766L37.5766 33L28.4234 38.3234Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_334">
                        <rect width="66" height="66" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="_contact_ctr" id="contact_us">
        <div className="_contact_box">
          <span>Kontaktieren Sie uns</span>
          <div className="contact_inputs">
            <div className="contact_fields">
              <input placeholder="Vorname" />
              <input placeholder="Nachname" />
              <input placeholder="Telefonnummer" />
              <input placeholder="email" />
            </div>
            <div className="message_field">
              <textarea placeholder="Nachricht..."></textarea>
            </div>
          </div>
          <button>Absenden</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
