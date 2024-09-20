---

########################### Hero slider ############################
hero_slider:
  enable : true
  slider_item:
    # slider item
    - subtitle : "Llygedyn o obaith"
      title : "Cynulliad cymunedol yng nghalon gardd goedwig bywyd gwyllt"
      content : "Darparu pecyn cymorth arbrofol i greu man cyfarfod cymunedol wedi'i amgylchynu â gardd bywyd gwyllt gynhyrchiol sy'n ffynnu. Wedi'i lleoli yng ngogledd Sir Benfro."
      bg_image : "https://res.cloudinary.com/hopegarden/image/upload/v1719872235/elephant-garlic-flower-169.jpg"
      animation : "fadeInUp" # animation select from : https://daneden.github.io/animate.css/
      button:
        enable : true
        label : "Gweithdai am ddim"
        link : "workshops/"
        animation : "zoomIn" # animation select from : https://daneden.github.io/animate.css/

################################## Banner feature ############################
banner_feature:
  enable : true
  # Max use 4 item
  feature_item:
    # banner feature item loop
    - name : "Democratiaeth"
      icon : "fa fa-fist-raised" # font-awesome 5 : https://fontawesome.com/v5/search
      content : "Democratiaeth uniongyrchol mewn proses benderfynu leol yw Cynulliad Cymunedol"
      link: /about
      
    # banner feature item loop
    - name : "Bywyd gwyllt"
      icon : "fa fa-frog" # font-awesome 5 : https://fontawesome.com/v5/search
      content : "Tyfu planhigion cynhenid, lle bo modd, ar gyfer pryfed, gan greu cynefin i bawb"
      link: /about
      
    # banner feature item loop
    - name : "Bwyd cynaliadwy"
      icon : "fab fa-pagelines" # font-awesome 5 : https://fontawesome.com/v5/search
      content : "Gardd goedwig, gyda choed ffrwythau a chnau, llwyni bwytadwy a llysiau lluosflwydd"
      link: /about

################################## About ####################################
about:
  enable : true
  subtitle : "Hwyluso democratiaeth uniongyrchol ac adfer natur"
  title : "Cydweithio â chymunedau"
  content : "Cymunedau a sefydliadau lleol yw ein partneriaeth ni, ac ry'n ni'n cydweithio i greu nid dim ond gardd gymunedol ond pecyn cymorth i bawb sydd am greu eu gofod eu hunain i hwyluso democratiaeth uniongyrchol ac i adfer natur.<br>Mae'r gwaith hwn ar y gweill, cofrestrwch i gael ein cylchlythyr ac i glywed am hynt y prosiect."
  bg_image : ""
  image : "https://res.cloudinary.com/hopegarden/image/upload/v1719873215/231012-red-apple.jpg"
  button:
    enable : true;
    label : "Tanysgrifio i'r cylchlythyr"
    link : "cylchlythyr/"

################################## Fun facts ###############################
funfacts :
  enable : false
  funfacts_item :
    # fanfacts item loop
    - name : "Prosiect ar ben"
      count : "50"
      icon : "fas fa-bullseye" # font-awesome 5 : https://fontawesome.com/v5/search
      
    # fanfacts item loop
    - name : "Blynyddoedd o brofiad"
      count : "25"
      icon : "far fa-calendar-alt" # font-awesome 5 : https://fontawesome.com/v5/search
      
    # fanfacts item loop
    - name : "Ennill gwobr"
      count : "250"
      icon : "fas fa-award" # font-awesome 5 : https://fontawesome.com/v5/search
      
    # fanfacts item loop
    - name : "Cwsmeriaid hapus"
      count : "500"
      icon : "far fa-smile" # font-awesome 5 : https://fontawesome.com/v5/search

################################# Feature ############################################
feature:
  enable : false
  subtitle : "Pam ein dewis ni"
  title : "Pam eu bod yn dewis Bexar"
  image_webp : "images/feature/feature.webp"
  image : "images/feature/feature.jpg"
  content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius tempor incididunt ut labore."
  feature_item:
    # feature item loop
    - name : "Dyluniad creadigol"
      icon : "far fa-snowflake" # font-awesome 5 : https://fontawesome.com/v5/search
      content : "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia."
      
    # feature item loop
    - name : "Codio perffaith"
      icon : "fas fa-code" # font-awesome 5 : https://fontawesome.com/v5/search
      content : "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia."

################################# Service ############################################
service:
  enable : false
  section: "gwasanaeth"
  show_item : 3
  # service item comes from "content/*/service" folder

################################# Team ##############################################
team:
  enable : true
  section: "tîm"
  show_item : 3
  # team member comes from "content/*/team" folder

################################# Project ############################################
project:
  enable : false
  section: "prosiect"
  show_item : 4
  button:
    enable : true
    label : "mwy o brosiectau"
    link : "prosiect/"
  # project item comes from "content/*/project" folder

################################# Testimonial #########################################
testimonial:
  enable : false
  subtitle : "Tystebau"
  title : "Beth mae cleientiaid yn ei ddweud?"
  testimonial_item:
    # testimonial item loop
    - client_image : "images/testimonial/client-1.jpg"
      name : "Dominic Allen"
      designation : "Dylunydd"
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor incididunt ut labore dolore magna aliqua.enim ad minim veniam.quis nostrud exercitation ullamco laboris nis aliquip ex ea commodo consequat. duis aute irure dolor in reprehen."
      
    # testimonial item loop
    - client_image : "images/testimonial/client-2.jpg"
      name : "Alex Pitt"
      designation : "Dylunydd"
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor incididunt ut labore dolore magna aliqua.enim ad minim veniam.quis nostrud exercitation ullamco laboris nis aliquip ex ea commodo consequat. duis aute irure dolor in reprehen."

    # testimonial item loop
    - client_image : "images/testimonial/client-3.jpg"
      name : "John Doe"
      designation : "Dylunydd"
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor incididunt ut labore dolore magna aliqua.enim ad minim veniam.quis nostrud exercitation ullamco laboris nis aliquip ex ea commodo consequat. duis aute irure dolor in reprehen."

################################# CTA ################################################
cta:
  enable : false
  title : "Bexar yn cynnig datrysiad deallus i'ch busnes chi"
  bg_image_webp : "images/backgrounds/cta-lg.webp"
  bg_image : "images/backgrounds/cta-lg.jpg"
  button:
    enable : true
    label : "Gofynnwch am ddyfynbris"
    link : "cysylltu/"

################################# Blog ################################################
blog:
  enable : true
  section : "blog"
  show_item : 3
  # blog post comes from "content/*/blog" folder

---
