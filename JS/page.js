document.addEventListener("DOMContentLoaded", function () {
    let upbtn = document.querySelector(".up");
  
    const dearEmployeSection = document.getElementById('dearEmploye');
 
   
    const dearEmployeHeight = dearEmployeSection.offsetHeight;

    upbtn.onclick = function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
  
      });
    };
    window.onscroll = function () {
        if (this.scrollY >= dearEmployeHeight ) {
          upbtn.classList.add("show");
        } else {
          upbtn.classList.remove("show");
        }
      };


      // const countries = [
      //   { code: '+93', name: 'AFGHANISTAN', flag: 'flag-af.png' },
      //   { code: '+355', name: 'ALBANIA', flag: 'flag-al.png' },
      //   { code: '+213', name: 'ALGERIA', flag: 'flag-dz.png' },
      //   { code: '+1-684', name: 'AMERICAN SAMOA', flag: 'flag-as.png' },
      //   { code: '+376', name: 'ANDORRA', flag: 'flag-ad.png' },
      //   { code: '+244', name: 'ANGOLA', flag: 'flag-ao.png' },
      //   { code: '+672', name: 'ANTARCTICA', flag: 'flag-aq.png' },
      //   { code: '+1-268', name: 'ANTIGUA AND BARBUDA', flag: 'flag-ag.png' },
      //   { code: '+54', name: 'ARGENTINA', flag: 'flag-ar.png' },
      //   { code: '+374', name: 'ARMENIA', flag: 'flag-am.png' },
      //   { code: '+297', name: 'ARUBA', flag: 'flag-aw.png' },
      //   { code: '+61', name: 'AUSTRALIA', flag: 'flag-au.png' },
      //   { code: '+43', name: 'AUSTRIA', flag: 'flag-at.png' },
      //   { code: '+994', name: 'AZERBAIJAN', flag: 'flag-az.png' },
      //   { code: '+1-242', name: 'BAHAMAS', flag: 'flag-bs.png' },
      //   { code: '+973', name: 'BAHRAIN', flag: 'flag-bh.png' },
      //   { code: '+880', name: 'BANGLADESH', flag: 'flag-bd.png' },
      //   { code: '+1-246', name: 'BARBADOS', flag: 'flag-bb.png' },
      //   { code: '+375', name: 'BELARUS', flag: 'flag-by.png' },
      //   { code: '+32', name: 'BELGIUM', flag: 'flag-be.png' },
      //   { code: '+501', name: 'BELIZE', flag: 'flag-bz.png' },
      //   { code: '+229', name: 'BENIN', flag: 'flag-bj.png' },
      //   { code: '+1-441', name: 'BERMUDA', flag: 'flag-bm.png' },
      //   { code: '+975', name: 'BHUTAN', flag: 'flag-bt.png' },
      //   { code: '+591', name: 'BOLIVIA', flag: 'flag-bo.png' },
      //   { code: '+387', name: 'BOSNIA AND HERZEGOVINA', flag: 'flag-ba.png' },
      //   { code: '+267', name: 'BOTSWANA', flag: 'flag-bw.png' },
      //   { code: '+55', name: 'BRAZIL', flag: 'flag-br.png' },
      //   { code: '+246', name: 'BRITISH INDIAN OCEAN TERRITORY', flag: 'flag-io.png' },
      //   { code: '+673', name: 'BRUNEI DARUSSALAM', flag: 'flag-bn.png' },
      //   { code: '+359', name: 'BULGARIA', flag: 'flag-bg.png' },
      //   { code: '+226', name: 'BURKINA FASO', flag: 'flag-bf.png' },
      //   { code: '+257', name: 'BURUNDI', flag: 'flag-bi.png' },
      //   { code: '+855', name: 'CAMBODIA', flag: 'flag-kh.png' },
      //   { code: '+237', name: 'CAMEROON', flag: 'flag-cm.png' },
      //   { code: '+1', name: 'CANADA', flag: 'flag-ca.png' },
      //   { code: '+238', name: 'CAPE VERDE', flag: 'flag-cv.png' },
      //   { code: '+1-345', name: 'CAYMAN ISLANDS', flag: 'flag-ky.png' },
      //   { code: '+236', name: 'CENTRAL AFRICAN REPUBLIC', flag: 'flag-cf.png' },
      //   { code: '+235', name: 'CHAD', flag: 'flag-td.png' },
      //   { code: '+56', name: 'CHILE', flag: 'flag-cl.png' },
      //   { code: '+86', name: 'CHINA', flag: 'flag-cn.png' },
      //   { code: '+61', name: 'CHRISTMAS ISLAND', flag: 'flag-cx.png' },
      //   { code: '+61', name: 'COCOS (KEELING) ISLANDS', flag: 'flag-cc.png' },
      //   { code: '+57', name: 'COLOMBIA', flag: 'flag-co.png' },
      //   { code: '+269', name: 'COMOROS', flag: 'flag-km.png' },
      //   { code: '+242', name: 'CONGO', flag: 'flag-cg.png' },
      //   { code: '+243', name: 'CONGO, THE DEMOCRATIC REPUBLIC OF THE', flag: 'flag-cd.png' },
      //   { code: '+682', name: 'COOK ISLANDS', flag: 'flag-ck.png' },
      //   { code: '+506', name: 'COSTA RICA', flag: 'flag-cr.png' },
      //   { code: '+225', name: "CÔTE D'IVOIRE", flag: 'flag-ci.png' },
      //   { code: '+385', name: 'CROATIA', flag: 'flag-hr.png' },
      //   { code: '+53', name: 'CUBA', flag: 'flag-cu.png' },
      //   { code: '+357', name: 'CYPRUS', flag: 'flag-cy.png' },
      //   { code: '+420', name: 'CZECH REPUBLIC', flag: 'flag-cz.png' },
      //   { code: '+45', name: 'DENMARK', flag: 'flag-dk.png' },
      //   { code: '+253', name: 'DJIBOUTI', flag: 'flag-dj.png' },
      //   { code: '+1-767', name: 'DOMINICA', flag: 'flag-dm.png' },
      //   { code: '+1-809, +1-829, +1-849', name: 'DOMINICAN REPUBLIC', flag: 'flag-do.png' },
      //   { code: '+593', name: 'ECUADOR', flag: 'flag-ec.png' },
      //   { code: '+20', name: 'EGYPT', flag: 'flag-eg.png' },
      //   { code: '+503', name: 'EL SALVADOR', flag: 'flag-sv.png' },
      //   { code: '+240', name: 'EQUATORIAL GUINEA', flag: 'flag-gq.png' },
      //   { code: '+291', name: 'ERITREA', flag: 'flag-er.png' },
      //   { code: '+372', name: 'ESTONIA', flag: 'flag-ee.png' },
      //   { code: '+251', name: 'ETHIOPIA', flag: 'flag-et.png' },
      //   { code: '+500', name: 'FALKLAND ISLANDS (MALVINAS)', flag: 'flag-fk.png' },
      //   { code: '+298', name: 'FAROE ISLANDS', flag: 'flag-fo.png' },
      //   { code: '+679', name: 'FIJI', flag: 'flag-fj.png' },
      //   { code: '+358', name: 'FINLAND', flag: 'flag-fi.png' },
      //   { code: '+33', name: 'FRANCE', flag: 'flag-fr.png' },
      //   { code: '+594', name: 'FRENCH GUIANA', flag: 'flag-gf.png' },
      //   { code: '+689', name: 'FRENCH POLYNESIA', flag: 'flag-pf.png' },
      //   { code: '+262', name: 'FRENCH SOUTHERN TERRITORIES', flag: 'flag-tf.png' },
      //   { code: '+241', name: 'GABON', flag: 'flag-ga.png' },
      //   { code: '+220', name: 'GAMBIA', flag: 'flag-gm.png' },
      //   { code: '+995', name: 'GEORGIA', flag: 'flag-ge.png' },
      //   { code: '+49', name: 'GERMANY', flag: 'flag-de.png' },
      //   { code: '+233', name: 'GHANA', flag: 'flag-gh.png' },
      //   { code: '+350', name: 'GIBRALTAR', flag: 'flag-gi.png' },
      //   { code: '+30', name: 'GREECE', flag: 'flag-gr.png' },
      //   { code: '+299', name: 'GREENLAND', flag: 'flag-gl.png' },
      //   { code: '+1-473', name: 'GRENADA', flag: 'flag-gd.png' },
      //   { code: '+590', name: 'GUADELOUPE', flag: 'flag-gp.png' },
      //   { code: '+1-671', name: 'GUAM', flag: 'flag-gu.png' },
      //   { code: '+502', name: 'GUATEMALA', flag: 'flag-gt.png' },
      //   { code: '+224', name: 'GUINEA', flag: 'flag-gn.png' },
      //   { code: '+245', name: 'GUINEA-BISSAU', flag: 'flag-gw.png' },
      //   { code: '+592', name: 'GUYANA', flag: 'flag-gy.png' },
      //   { code: '+509', name: 'HAITI', flag: 'flag-ht.png' },
      //   { code: '+672', name: 'HEARD ISLAND AND MCDONALD ISLANDS', flag: 'flag-hm.png' },
      //   { code: '+504', name: 'HONDURAS', flag: 'flag-hn.png' },
      //   { code: '+852', name: 'HONG KONG', flag: 'flag-hk.png' },
      //   { code: '+36', name: 'HUNGARY', flag: 'flag-hu.png' },
      //   { code: '+354', name: 'ICELAND', flag: 'flag-is.png' },
      //   { code: '+91', name: 'INDIA', flag: 'flag-in.png' },
      //   { code: '+62', name: 'INDONESIA', flag: 'flag-id.png' },
      //   { code: '+98', name: 'IRAN, ISLAMIC REPUBLIC OF', flag: 'flag-ir.png' },
      //   { code: '+964', name: 'IRAQ', flag: 'flag-iq.png' },
      //   { code: '+353', name: 'IRELAND', flag: 'flag-ie.png' },
      //   { code: '+972', name: 'ISRAEL', flag: 'flag-il.png' },
      //   { code: '+39', name: 'ITALY', flag: 'flag-it.png' },
      //   { code: '+1-876', name: 'JAMAICA', flag: 'flag-jm.png' },
      //   { code: '+81', name: 'JAPAN', flag: 'flag-jp.png' },
      //   { code: '+962', name: 'JORDAN', flag: 'flag-jo.png' },
      //   { code: '+7', name: 'KAZAKHSTAN', flag: 'flag-kz.png' },
      //   { code: '+254', name: 'KENYA', flag: 'flag-ke.png' },
      //   { code: '+686', name: 'KIRIBATI', flag: 'flag-ki.png' },
      //   { code: '+850', name: "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF", flag: 'flag-kp.png' },
      //   { code: '+82', name: 'KOREA, REPUBLIC OF', flag: 'flag-kr.png' },
      //   { code: '+965', name: 'KUWAIT', flag: 'flag-kw.png' },
      //   { code: '+996', name: 'KYRGYZSTAN', flag: 'flag-kg.png' },
      //   { code: '+856', name: "LAO PEOPLE'S DEMOCRATIC REPUBLIC (LAOS)", flag: 'flag-la.png' },
      //   { code: '+371', name: 'LATVIA', flag: 'flag-lv.png' },
      //   { code: '+961', name: 'LEBANON', flag: 'flag-lb.png' },
      //   { code: '+266', name: 'LESOTHO', flag: 'flag-ls.png' },
      //   { code: '+231', name: 'LIBERIA', flag: 'flag-lr.png' },
      //   { code: '+218', name: 'LIBYA, STATE OF', flag: 'flag-ly.png' },
      //   { code: '+423', name: 'LIECHTENSTEIN', flag: 'flag-li.png' },
      //   { code: '+370', name: 'LITHUANIA', flag: 'flag-lt.png' },
      //   { code: '+352', name: 'LUXEMBOURG', flag: 'flag-lu.png' },
      //   { code: '+853', name: 'MACAO', flag: 'flag-mo.png' },
      //   { code: '+389', name: 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF', flag: 'flag-mk.png' },
      //   { code: '+261', name: 'MADAGASCAR', flag: 'flag-mg.png' },
      //   { code: '+265', name: 'MALAWI', flag: 'flag-mw.png' },
      //   { code: '+60', name: 'MALAYSIA', flag: 'flag-my.png' },
      //   { code: '+960', name: 'MALDIVES', flag: 'flag-mv.png' },
      //   { code: '+223', name: 'MALI', flag: 'flag-ml.png' },
      //   { code: '+356', name: 'MALTA', flag: 'flag-mt.png' },
      //   { code: '+692', name: 'MARSHALL ISLANDS', flag: 'flag-mh.png' },
      //   { code: '+596', name: 'MARTINIQUE', flag: 'flag-mq.png' },
      //   { code: '+222', name: 'MAURITANIA', flag: 'flag-mr.png' },
      //   { code: '+230', name: 'MAURITIUS', flag: 'flag-mu.png' },
      //   { code: '+262', name: 'MAYOTTE', flag: 'flag-yt.png' },
      //   { code: '+52', name: 'MEXICO', flag: 'flag-mx.png' },
      //   { code: '+691', name: 'MICRONESIA, FEDERATED STATES OF', flag: 'flag-fm.png' },
      //   { code: '+373', name: 'MOLDOVA, REPUBLIC OF', flag: 'flag-md.png' },
      //   { code: '+377', name: 'MONACO', flag: 'flag-mc.png' },
      //   { code: '+976', name: 'MONGOLIA', flag: 'flag-mn.png' },
      //   { code: '+382', name: 'MONTENEGRO', flag: 'flag-me.png' },
      //   { code: '+1-664', name: 'MONTSERRAT', flag: 'flag-ms.png' },
      //   { code: '+212', name: 'MOROCCO', flag: 'flag-ma.png' },
      //   { code: '+258', name: 'MOZAMBIQUE', flag: 'flag-mz.png' },
      //   { code: '+95', name: 'MYANMAR', flag: 'flag-mm.png' },
      //   { code: '+264', name: 'NAMIBIA', flag: 'flag-na.png' },
      //   { code: '+674', name: 'NAURU', flag: 'flag-nr.png' },
      //   { code: '+977', name: 'NEPAL, FEDERAL DEMOCRATIC REPUBLIC OF', flag: 'flag-np.png' },
      //   { code: '+31', name: 'NETHERLANDS', flag: 'flag-nl.png' },
      //   { code: '+599', name: 'NETHERLANDS ANTILLES', flag: 'flag-an.png' },
      //   { code: '+687', name: 'NEW CALEDONIA', flag: 'flag-nc.png' },
      //   { code: '+64', name: 'NEW ZEALAND', flag: 'flag-nz.png' },
      //   { code: '+505', name: 'NICARAGUA', flag: 'flag-ni.png' },
      //   { code: '+227', name: 'NIGER', flag: 'flag-ne.png' },
      //   { code: '+234', name: 'NIGERIA', flag: 'flag-ng.png' },
      //   { code: '+683', name: 'NIUE', flag: 'flag-nu.png' },
      //   { code: '+672', name: 'NORFOLK ISLAND', flag: 'flag-nf.png' },
      //   { code: '+1-670', name: 'NORTHERN MARIANA ISLANDS', flag: 'flag-mp.png' },
      //   { code: '+47', name: 'NORWAY', flag: 'flag-no.png' },
      //   { code: '+968', name: 'OMAN', flag: 'flag-om.png' },
      //   { code: '+92', name: 'PAKISTAN', flag: 'flag-pk.png' },
      //   { code: '+680', name: 'PALAU', flag: 'flag-pw.png' },
      //   { code: '+970', name: 'PALESTINE, STATE OF', flag: 'flag-ps.png' },
      //   { code: '+507', name: 'PANAMA', flag: 'flag-pa.png' },
      //   { code: '+675', name: 'PAPUA NEW GUINEA', flag: 'flag-pg.png' },
      //   { code: '+595', name: 'PARAGUAY', flag: 'flag-py.png' },
      //   { code: '+51', name: 'PERU', flag: 'flag-pe.png' },
      //   { code: '+63', name: 'PHILIPPINES', flag: 'flag-ph.png' },
      //   { code: '+64', name: 'PITCAIRN', flag: 'flag-pn.png' },
      //   { code: '+48', name: 'POLAND', flag: 'flag-pl.png' },
      //   { code: '+351', name: 'PORTUGAL', flag: 'flag-pt.png' },
      //   { code: '+1-787, +1-939', name: 'PUERTO RICO', flag: 'flag-pr.png' },
      //   { code: '+974', name: 'QATAR', flag: 'flag-qa.png' },
      //   { code: '+262', name: 'RÉUNION', flag: 'flag-re.png' },
      //   { code: '+40', name: 'ROMANIA', flag: 'flag-ro.png' },
      //   { code: '+7', name: 'RUSSIAN FEDERATION', flag: 'flag-ru.png' },
      //   { code: '+250', name: 'RWANDA', flag: 'flag-rw.png' },
      //   { code: '+290', name: 'SAINT HELENA', flag: 'flag-sh.png' },
      //   { code: '+1-869', name: 'SAINT KITTS AND NEVIS', flag: 'flag-kn.png' },
      //   { code: '+1-758', name: 'SAINT LUCIA', flag: 'flag-lc.png' },
      //   { code: '+508', name: 'SAINT PIERRE AND MIQUELON', flag: 'flag-pm.png' },
      //   { code: '+1-784', name: 'SAINT VINCENT AND THE GRENADINES', flag: 'flag-vc.png' },
      //   { code: '+685', name: 'SAMOA', flag: 'flag-ws.png' },
      //   { code: '+378', name: 'SAN MARINO', flag: 'flag-sm.png' },
      //   { code: '+239', name: 'SAO TOME AND PRINCIPE', flag: 'flag-st.png' },
      //   { code: '+966', name: 'SAUDI ARABIA', flag: 'flag-sa.png' },
      //   { code: '+221', name: 'SENEGAL', flag: 'flag-sn.png' },
      //   { code: '+381', name: 'SERBIA', flag: 'flag-rs.png' },
      //   { code: '+248', name: 'SEYCHELLES', flag: 'flag-sc.png' },
      //   { code: '+232', name: 'SIERRA LEONE', flag: 'flag-sl.png' },
      //   { code: '+65', name: 'SINGAPORE', flag: 'flag-sg.png' },
      //   { code: '+421', name: 'SLOVAKIA', flag: 'flag-sk.png' },
      //   { code: '+386', name: 'SLOVENIA', flag: 'flag-si.png' },
      //   { code: '+677', name: 'SOLOMON ISLANDS', flag: 'flag-sb.png' },
      //   { code: '+252', name: 'SOMALIA', flag: 'flag-so.png' },
      //   { code: '+27', name: 'SOUTH AFRICA', flag: 'flag-za.png' },
      //   { code: '+500', name: 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS', flag: 'flag-gs.png' },
      //   { code: '+211', name: 'SOUTH SUDAN', flag: 'flag-ss.png' },
      //   { code: '+34', name: 'SPAIN', flag: 'flag-es.png' },
      //   { code: '+94', name: 'SRI LANKA', flag: 'flag-lk.png' },
      //   { code: '+249', name: 'SUDAN', flag: 'flag-sd.png' },
      //   { code: '+597', name: 'SURINAME', flag: 'flag-sr.png' },
      //   { code: '+47', name: 'SVALBARD AND JAN MAYEN', flag: 'flag-sj.png' },
      //   { code: '+268', name: 'SWAZILAND', flag: 'flag-sz.png' },
      //   { code: '+46', name: 'SWEDEN', flag: 'flag-se.png' },
      //   { code: '+41', name: 'SWITZERLAND', flag: 'flag-ch.png' },
      //   { code: '+963', name: 'SYRIAN ARAB REPUBLIC', flag: 'flag-sy.png' },
      //   { code: '+886', name: 'TAIWAN', flag: 'flag-tw.png' },
      //   { code: '+992', name: 'TAJIKISTAN', flag: 'flag-tj.png' },
      //   { code: '+255', name: 'TANZANIA, UNITED REPUBLIC OF', flag: 'flag-tz.png' },
      //   { code: '+66', name: 'THAILAND', flag: 'flag-th.png' },
      //   { code: '+670', name: 'TIMOR-LESTE', flag: 'flag-tl.png' },
      //   { code: '+228', name: 'TOGO', flag: 'flag-tg.png' },
      //   { code: '+690', name: 'TOKELAU', flag: 'flag-tk.png' },
      //   { code: '+676', name: 'TONGA', flag: 'flag-to.png' },
      //   { code: '+1-868', name: 'TRINIDAD AND TOBAGO', flag: 'flag-tt.png' },
      //   { code: '+216', name: 'TUNISIA', flag: 'flag-tn.png' },
      //   { code: '+90', name: 'TURKEY', flag: 'flag-tr.png' },
      //   { code: '+993', name: 'TURKMENISTAN', flag: 'flag-tm.png' },
      //   { code: '+1-649', name: 'TURKS AND CAICOS ISLANDS', flag: 'flag-tc.png' },
      //   { code: '+688', name: 'TUVALU', flag: 'flag-tv.png' },
      //   { code: '+256', name: 'UGANDA', flag: 'flag-ug.png' },
      //   { code: '+380', name: 'UKRAINE', flag: 'flag-ua.png' },
      //   { code: '+971', name: 'UNITED ARAB EMIRATES', flag: 'flag-ae.png' },
      //   { code: '+44', name: 'UNITED KINGDOM', flag: 'flag-gb.png' },
      //   { code: '+1', name: 'UNITED STATES', flag: 'flag-us.png' },
      //   { code: '+1-340', name: 'UNITED STATES MINOR OUTLYING ISLANDS', flag: 'flag-um.png' },
      //   { code: '+598', name: 'URUGUAY', flag: 'flag-uy.png' },
      //   { code: '+998', name: 'UZBEKISTAN', flag: 'flag-uz.png' },
      //   { code: '+678', name: 'VANUATU', flag: 'flag-vu.png' },
      //   { code: '+58', name: 'VENEZUELA', flag: 'flag-ve.png' },
      //   { code: '+84', name: 'VIET NAM', flag: 'flag-vn.png' },
      //   { code: '+1-284', name: 'VIRGIN ISLANDS, BRITISH', flag: 'flag-vg.png' },
      //   { code: '+1-340', name: 'VIRGIN ISLANDS, U.S.', flag: 'flag-vi.png' },
      //   { code: '+681', name: 'WALLIS AND FUTUNA', flag: 'flag-wf.png' },
      //   { code: '+212', name: 'WESTERN SAHARA', flag: 'flag-eh.png' },
      //   { code: '+967', name: 'YEMEN', flag: 'flag-ye.png' },
      //   { code: '+260', name: 'ZAMBIA', flag: 'flag-zm.png' },
      //   { code: '+263', name: 'ZIMBABWE', flag: 'flag-zw.png' },
      // ];
      
      
        
      // const countryCodeSelect = document.getElementById('country-code');
      
      // countries.forEach(country => {
      //   const option = document.createElement('option');
      //   option.value = country.code;
      //   option.text = `${country.name} (${country.code})`;
      //   countryCodeSelect.appendChild(option);
        
    
       
        
       
      
      // }
      
      // );
    
});


