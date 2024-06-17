import React, { useEffect, useState } from "react";
import Footer from "../../layout/footer";
import photo from "../../assets/MyFeesLogo.png";
import photo2 from "../../assets/MissMehr.jpg";
import photo3 from "../../assets/Testimony1.jpg";
import photo4 from "../../assets/Testimony2.jpg";

const About = () => {
  return (
    <div className="grid grid-cols-1 gap-4 ">
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white p-6">
          <h2 className="text-4xl font-bold mb-4 text-center font-['Playfair_Display'] ">
            Our mission
          </h2>
          <p className="text-center font-['Playfair_Display'] ">
            The Catalyst is the official student voice of APIIT. Our mission is
            to provide a platform for students to express themselves through
            writing, develop critical thinking skills, and foster a sense of
            community on campus. We aim to keep the student body informed about
            important news, events, and issues impacting university life. The
            Catalyst serves as a training ground for the next generation of
            journalists, writers, editors, and media professionals. Through
            fair, accurate, and ethical reporting, we strive to catalyze
            positive change, spark insightful discussions, and celebrate the
            diversity and achievements of our university. The Catalyst is a
            student-run publication dedicated to giving APIIT students a
            powerful voice.
          </p>
        </div>
        {/* <div class="grid grid-cols-2 grid-rows-2 gap-4">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-bold mb-4">Row 1, Column 1</h2>
            <p>This is the content for the first cell.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-bold mb-4">Row 1, Column 2</h2>
            <p>This is the content for the second cell.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-bold mb-4">Row 2, Column 1</h2>
            <p>This is the content for the third cell.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-bold mb-4">Row 2, Column 2</h2>
            <p>This is the content for the fourth cell.</p>
          </div>
        </div> */}
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white p-6 text-center">
          <h2 className="text-4xl font-bold mb-4 font-['Playfair_Display'] ">
            Who brought us to life?
          </h2>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 gap-4">
          <div className="lg:grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-rows-1 lg:gap-4 md:gap-4 gap-2">
            <div className="bg-white p-5">
              <h2 className="text-2xl text-center font-bold mb-4 font-['Playfair_Display'] ">
                Miss Mehr
              </h2>
              <p className="font-['Playfair_Display'] text-center ">
                The Catalyst owes its existence to the vision and hard work of
                Miss Mehr Gunawardene, our beloved founder. It was her
                brainchild to establish APIIT's first-ever student newspaper to
                provide a platform for students to find their voice through
                writing.She nurtured the publication through its fledgling
                years, imparting her vast knowledge and experience to the eager
                ranks of Catalyst pioneers. Her office door was always open for
                students in need of mentorship, feedback, or just an
                understanding ear.She is a formidable force and a true
                inspiration. The Catalyst would not be what it is today without
                Miss Mehr's passion, determination, and selfless devotion to
                empowering the student voice on campus.It is her trust and
                mentorship that has molded 'The Catalyst' into what it is today!
                We remain forever indebted to our esteemed founder.
              </p>
            </div>

            <div className="bg-white lg:p-6 p-2 ">
              <div>
                <img src={photo2} alt="" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 ">
            <div className="text-center">
              <h2 className="text-5xl font-bold font-['Playfair_Display'] mt-5">
                Our partners
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-rows-1 gap-4  top-0 bottom-0 pt-5 p-5">
              <div className="bg-white w-2/3 m-auto ">
                <img src={photo} alt="" />
              </div>
              <div>
              <div className="bg-white p-6">
                <p className="font-['Playfair_Display'] text-center">
                  Since its inception in 2017, MyFees.lk has been at the
                  forefront of revolutionizing financial management for
                  educational institutions. By offering a comprehensive and
                  user-friendly platform, MyFees.lk quickly gained prominence in
                  the island's education sector. Recognizing the potential to
                  enhance their financial operations, APIIT soon forged a
                  strategic alliance with MyFees.lk. This collaboration
                  empowered APIIT to streamline fee collections, automate
                  billing, and deliver transparent financial reports.
                  Additionally, it introduced valuable features such as Easy
                  Payment Plans, Education Loans, and support for multiple card
                  types across all leading banks on the island. Overall, this
                  partnership has transformed the traditionally cash-based or
                  bank transfer-centric ecosystem into a sophisticated online
                  payment method, thereby elevating industry standards to an
                  international level..
                </p>
              </div>
            </div>
            </div>

  
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 grid-rows-1 gap-4">
              <div className="bg-white p-6 ">
                <p className="font-['Playfair_Display'] text-center text-3xl font-bold  ">
                  Why is this the Ultimate Partnership: Because Paying Should Be
                  a Breeze, Not a Hassle!
                </p>
              </div>
            </div>

            <div className="bg-white p-6">
              <p className="font-['Playfair_Display'] text-center ">
                The partnership between MyFees and the Asia Pacific Institute of
                Information Technology (APIIT) exemplifies an exceptional
                collaboration in the education sector, marking a significant
                stride toward modernizing educational administration. By
                automating financial processes and ensuring transparency, MyFees
                not only enhances operational efficiency but also supports APIIT
                in its mission to provide high-quality education. This alliance
                sets a new benchmark for efficiency and innovation in the
                educational sector, benefiting students, staff, and the broader
                academic community as well.
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 w-full ">
          <div className="bg-white p-10  rounded-lg shadow-md w-full">
            <img
              src={photo3}
              alt="Image 1"
              className="w-48 h-48 rounded-full mx-auto object-cover"
            />
            <p className="p-5 text-center font-['Cormorant']  text-xl font-medium ">
              "MyFees has simplfied payment settlement quite a lot. It is so
              easy to go into their website and settle my university fees with
              just a few simple clicks. It has made the process of settling my
              fees so much easier and hassle-free. I am truly grateful for their
              services and the convenience they offer me.The convenience MyFees
              provides is unparalleled" - Second year , Law Student.
            </p>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-md md w-full">
            <img
              src={photo4}
              alt="Image 2"
              className="w-48 h-48  rounded-full mx-auto object-cover"
            />
            <p className="p-5 text-center font-['Cormorant']  text-xl font-medium ">
              " MyFees has signifcantly transformed the way I manage my
              university finances. Their user friendly interface makes it easy
              to comprehend and navigating the payment system is extremely
              straightforward. Furthermore,What particularly instills confidence
              in MyFees is their widespread adoption by numerous prestigious
              educational institutions across Sri Lanka. This speaks volumes and
              has provided me with a sense of security" - Second year , Business
              student.
            </p>
          </div>
    
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
