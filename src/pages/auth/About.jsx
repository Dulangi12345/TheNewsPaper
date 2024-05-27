import React, { useEffect, useState } from "react";
import Footer from "../../layout/footer";

const About = () => {
  return (
    <div class="grid grid-cols-1 gap-4">
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-white p-6">
          <h2 class="text-xl font-bold mb-4">Our mission</h2>
          <p>
            Nunc gravida mi sed eros faucibus sagittis. Morbi ac ullamcorper ex,
            vel cursus enim. Nam consectetur aliquet mi, et volutpat nulla
            feugiat sed. Nulla vehicula cursus nisi. Quisque non dui augue.
            Vestibulum lacinia ultricies felis at lobortis. Sed mollis ac massa
            ac varius. Suspendisse potenti. Aliquam auctor molestie sodales. In
            ut mi ut augue dictum imperdiet. Nunc dapibus justo odio. Sed porta
            porta nisi. Suspendisse efficitur ipsum ut massa maximus, sit amet
            ultrices purus ornare. Maecenas libero augue, convallis mollis odio
            vitae, lacinia dapibus urna.Suspendisse potenti. Nullam viverra
            felis nisi, sed laoreet ipsum hendrerit id. Maecenas quis augue non
            nunc luctus porttitor. Maecenas lobortis sollicitudin elit quis
            blandit. Phasellus vehicula odio a odio luctus, ac semp.
          </p>
        </div>
        <div class="grid grid-cols-2 grid-rows-2 gap-4">
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
        </div>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <div class="bg-white p-6 text-center">
          <h2 class="text-xl font-bold mb-4">Who brought us to life?</h2>
        </div>
        <div class="grid grid-cols-1 grid-rows-2 gap-4">
          <div class="grid grid-cols-2 grid-rows-1 gap-4">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h2 class="text-xl font-bold mb-4">Name of patron</h2>
              <p>
                Nunc gravida mi sed eros faucibus sagittis. Morbi ac ullamcorper
                ex, vel cursus enim. Nam consectetur aliquet mi, et volutpat
                nulla feugiat sed. Nulla vehicula cursus nisi. Quisque non dui
                augue. Vestibulum lacinia ultricies felis at lobortis. Sed
                mollis ac massa ac varius. Suspendisse potenti. Aliquam auctor
                molestie sodales. In ut mi ut augue dictum imperdiet. Nunc
                dapibus justo odio. Sed porta porta nisi. Suspendisse efficitur
                ipsum ut massa maximus, sit amet ultrices purus ornare. Maecenas
                libero augue, convallis mollis odio vitae, lacinia dapibus
                urna.Suspendisse potenti. Nullam viverra felis nisi, sed laoreet
                ipsum hendrerit id. Maecenas quis augue non nunc luctus
                porttitor. Maecenas lobortis sollicitudin elit quis blandit.
                Phasellus vehicula odio a odio luctus, ac semp.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <p>
                <img src="" alt="" />
              </p>
            </div>
          </div>

          <div class="grid grid-cols-2 grid-rows-1 gap-4">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h2 class="text-xl font-bold mb-4">Name of patron</h2>
              <p>
                Nunc gravida mi sed eros faucibus sagittis. Morbi ac ullamcorper
                ex, vel cursus enim. Nam consectetur aliquet mi, et volutpat
                nulla feugiat sed. Nulla vehicula cursus nisi. Quisque non dui
                augue. Vestibulum lacinia ultricies felis at lobortis. Sed
                mollis ac massa ac varius. Suspendisse potenti. Aliquam auctor
                molestie sodales. In ut mi ut augue dictum imperdiet. Nunc
                dapibus justo odio. Sed porta porta nisi. Suspendisse efficitur
                ipsum ut massa maximus, sit amet ultrices purus ornare. Maecenas
                libero augue, convallis mollis odio vitae, lacinia dapibus
                urna.Suspendisse potenti. Nullam viverra felis nisi, sed laoreet
                ipsum hendrerit id. Maecenas quis augue non nunc luctus
                porttitor. Maecenas lobortis sollicitudin elit quis blandit.
                Phasellus vehicula odio a odio luctus, ac semp.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <p>
                <img src="" alt="" />
              </p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="grid grid-cols-1 grid-rows-1 gap-4">
              <div class="bg-white p-6 rounded-lg shadow-md">
                <p>My Fees image</p>
              </div>
            </div>

            <div class="bg-white p-6">
              <h2 class="text-xl font-bold mb-4">Our Partners</h2>
              <p>
                Nunc gravida mi sed eros faucibus sagittis. Morbi ac ullamcorper
                ex, vel cursus enim. Nam consectetur aliquet mi, et volutpat
                nulla feugiat sed. Nulla vehicula cursus nisi. Quisque non dui
                augue. Vestibulum lacinia ultricies felis at lobortis. Sed
                mollis ac massa ac varius. Suspendisse potenti. Aliquam auctor
                molestie sodales. In ut mi ut augue dictum imperdiet. Nunc
                dapibus justo odio. Sed porta porta nisi. Suspendisse efficitur
                ipsum ut massa maximus, sit amet ultrices purus ornare. Maecenas
                libero augue, convallis mollis odio vitae, lacinia dapibus
                urna.Suspendisse potenti. Nullam viverra felis nisi, sed laoreet
                ipsum hendrerit id. Maecenas quis augue non nunc luctus
                porttitor. Maecenas lobortis sollicitudin elit quis blandit.
                Phasellus vehicula odio a odio luctus, ac semp.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="grid grid-cols-1 grid-rows-1 gap-4">
              <div class="bg-white p-6 rounded-lg shadow-md">
                <p>
                  Why is this the Ultimate Partnership: Because Paying Should Be
                  a Breeze, Not a Hassle!
                </p>
              </div>
            </div>

            <div class="bg-white p-6">
              <p>
                Nunc gravida mi sed eros faucibus sagittis. Morbi ac ullamcorper
                ex, vel cursus enim. Nam consectetur aliquet mi, et volutpat
                nulla feugiat sed. Nulla vehicula cursus nisi. Quisque non dui
                augue. Vestibulum lacinia ultricies felis at lobortis. Sed
                mollis ac massa ac varius. Suspendisse potenti. Aliquam auctor
                molestie sodales. In ut mi ut augue dictum imperdiet. Nunc
                dapibus justo odio. Sed porta porta nisi. Suspendisse efficitur
                ipsum ut massa maximus, sit amet ultrices purus ornare. Maecenas
                libero augue, convallis mollis odio vitae, lacinia dapibus
                urna.Suspendisse potenti. Nullam viverra felis nisi, sed laoreet
                ipsum hendrerit id. Maecenas quis augue non nunc luctus
                porttitor. Maecenas lobortis sollicitudin elit quis blandit.
                Phasellus vehicula odio a odio luctus, ac semp.
              </p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4">
        <div class="bg-white p-6 rounded-lg shadow-md">
            <img src="image1.jpg" alt="Image 1" class="w-full h-auto mb-4"/>
            <p>This is the content for the first column.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
            <img src="image2.jpg" alt="Image 2" class="w-full h-auto mb-4"/>
            <p>This is the content for the second column.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
            <img src="image3.jpg" alt="Image 3" class="w-full h-auto mb-4"/>
            <p>This is the content for the third column.</p>
        </div>
    </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
