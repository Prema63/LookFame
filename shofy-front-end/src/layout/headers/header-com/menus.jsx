// "use client";
// import React from "react";
// import menu_data from "@/data/menu-data";
// import Link from "next/link";
// import Image from "next/image";

// const Menus = () => {
//   return (
//     <ul>
//       {menu_data.map((menu) => {
//         // Safety check to ensure menu exists
//         if (!menu) return null;

//         if (menu.products && menu.product_pages) {
//           return (
//             <li
//               key={menu.id}
//               className="has-dropdown has-mega-menu jockey-style-mega"
//             >
//               <Link href={menu.link}>{menu.title}</Link>
//               <div className="tp-submenu tp-mega-menu jockey-mega-menu ">
//                 <div className="jockey-mega-wrapper">

//                   {/* Left Section category and middle image */}
//                   <div className="flex flex-col gap-4">
//                     {/*  Categories */}
//                     <div className="jockey-categories-section flex-1 flex gap-8">
//                       {menu.product_pages.map((category, i) => (
//                         <div key={i} className="jockey-category-column flex-1 min-w-[150px]">
//                           <h4 className="jockey-category-title">
//                             {category.title}
//                           </h4>
//                           <ul className="jockey-category-items">
//                             {category.mega_menus &&
//                               category.mega_menus.map((item, j) => (
//                                 <li key={j}>
//                                   <Link href={item.link}>{item.title}</Link>
//                                 </li>
//                               ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Middle Section - Banner */}
//                     <div className="jockey-banner-section w-[250px] flex-shrink-0">
//                       {menu.banner && (
//                         <div className="jockey-banner-container w-full h-full">
//                           <div className="jockey-banner-image">
//                             <Image
//                               src={menu.banner.image}
//                               alt={menu.banner.title}
//                               layout="responsive"
//                               width={250}
//                               height={500}
//                               className="banner-img"
//                             />
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {/* Right Section - Special Offers & Trending */}
//                   <div className="jockey-offers-section">
//                     {/* Special Offerings */}
//                     {menu.special_offerings && (
//                       <div className="jockey-special-offerings">
//                         <h4 className="jockey-section-title">
//                           OUR SPECIAL OFFERINGS
//                         </h4>
//                         <div className="jockey-offerings-grid">
//                           {menu.special_offerings.map((offering, i) => (
//                             <Link
//                               key={i}
//                               href={offering.link}
//                               className="jockey-offering-item"
//                             >
//                               <div className="jockey-offering-image">
//                                 <Image
//                                   src={offering.image}
//                                   alt={offering.title}
//                                   width={80}
//                                   height={80}
//                                   className="offering-img"
//                                 />
//                               </div>
//                               <span className="jockey-offering-text">
//                                 {offering.title}
//                               </span>
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Trending Collections */}
//                     {menu.trending_collections && (
//                       <div className="jockey-trending-collections">
//                         <h4 className="jockey-section-title">
//                           TRENDING COLLECTIONS
//                         </h4>
//                         <div className="jockey-trending-grid">
//                           {menu.trending_collections.map((trend, i) => (
//                             <Link
//                               key={i}
//                               href={trend.link}
//                               className="jockey-trending-item"
//                             >
//                               <div className="jockey-trending-image">
//                                 <Image
//                                   src={trend.image}
//                                   alt={trend.title}
//                                   width={60}
//                                   height={60}
//                                   className="trending-img"
//                                 />
//                               </div>
//                               <span className="jockey-trending-text">
//                                 {trend.title}
//                               </span>
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </li>
//           );
//         } else if (menu.sub_menu && menu.sub_menus) {
//           return (
//             <li key={menu.id} className="has-dropdown">
//               <Link href={menu.link}>{menu.title}</Link>
//               <ul className="tp-submenu">
//                 {menu.sub_menus.map((b, i) => (
//                   <li key={i}>
//                     <Link href={b.link}>{b.title}</Link>
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           );
//         } else {
//           return (
//             <li key={menu.id}>
//               <Link href={menu.link}>{menu.title}</Link>
//             </li>
//           );
//         }
//       })}
//     </ul>
//   );
// };

// export default Menus;




















"use client";
import React from "react";
import menu_data from "@/data/menu-data";
import Link from "next/link";
import Image from "next/image";

const Menus = () => {
  return (
    <ul>
      {menu_data.map((menu) => {
        // Safety check to ensure menu exists
        if (!menu) return null;

        if (menu.products && menu.product_pages) {
          return (
            <li
              key={menu.id}
              className="has-dropdown has-mega-menu jockey-style-mega"
            >
              <Link href={menu.link}>{menu.title}</Link>
              <div className="tp-submenu tp-mega-menu jockey-mega-menu ">
                <div className="jockey-mega-wrapper flex gap-6">

                  {/* Left Section - Categories */}
                  <div className="jockey-categories-section flex gap-8 flex-1">
                    {menu.product_pages.map((category, i) => (
                      <div key={i} className="jockey-category-column flex-1 min-w-[150px]">
                        <h4 className="jockey-category-title">
                          {category.title}
                        </h4>
                        <ul className="jockey-category-items">
                          {category.mega_menus &&
                            category.mega_menus.map((item, j) => (
                              <li key={j}>
                                <Link href={item.link}>{item.title}</Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Middle Section - Banner */}
                  <div className="jockey-banner-section w-[250px] flex-shrink-0">
                    {menu.banner && (
                      <div className="jockey-banner-container w-full h-full">
                        <div className="jockey-banner-image">
                          <Image
                            src={menu.banner.image}
                            alt={menu.banner.title}
                            layout="responsive"
                            width={250}
                            height={500}
                            className="banner-img"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Section - Special Offers & Trending */}
                  <div className="jockey-offers-section flex-shrink-0">
                    {/* Special Offerings */}
                    {menu.special_offerings && (
                      <div className="jockey-special-offerings">
                        <h4 className="jockey-section-title">
                          OUR SPECIAL OFFERINGS
                        </h4>
                        <div className="jockey-offerings-grid">
                          {menu.special_offerings.map((offering, i) => (
                            <Link
                              key={i}
                              href={offering.link}
                              className="jockey-offering-item"
                            >
                              <div className="jockey-offering-image">
                                <Image
                                  src={offering.image}
                                  alt={offering.title}
                                  width={80}
                                  height={80}
                                  className="offering-img"
                                />
                              </div>
                              <span className="jockey-offering-text">
                                {offering.title}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Trending Collections */}
                    {menu.trending_collections && (
                      <div className="jockey-trending-collections">
                        <h4 className="jockey-section-title">
                          TRENDING COLLECTIONS
                        </h4>
                        <div className="jockey-trending-grid">
                          {menu.trending_collections.map((trend, i) => (
                            <Link
                              key={i}
                              href={trend.link}
                              className="jockey-trending-item"
                            >
                              <div className="jockey-trending-image">
                                <Image
                                  src={trend.image}
                                  alt={trend.title}
                                  width={60}
                                  height={60}
                                  className="trending-img"
                                />
                              </div>
                              <span className="jockey-trending-text">
                                {trend.title}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        } else if (menu.sub_menu && menu.sub_menus) {
          return (
            <li key={menu.id} className="has-dropdown">
              <Link href={menu.link}>{menu.title}</Link>
              <ul className="tp-submenu">
                {menu.sub_menus.map((b, i) => (
                  <li key={i}>
                    <Link href={b.link}>{b.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        } else {
          return (
            <li key={menu.id}>
              <Link href={menu.link}>{menu.title}</Link>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Menus;