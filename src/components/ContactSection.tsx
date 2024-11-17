'use client'
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const location = { lat: -27.4977, lng: 153.0457 }; // Stones Corner coordinates

export default function ContactSection() {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '0.5rem',
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-[#4A8C7D]">
            Visit Our Practice
          </h2>
          <p className="text-[#847C77] max-w-2xl mx-auto">
            Located in the heart of Stones Corner, we offer a welcoming and professional environment for your therapy sessions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#4A8C7D] mt-1" />
              <div>
                <h3 className="text-xl font-medium text-[#4A8C7D] mb-2">Location</h3>
                <p className="text-[#847C77]">
                  417 Logan Road<br />
                  Stones Corner, QLD 4120
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-[#4A8C7D] mt-1" />
              <div>
                <h3 className="text-xl font-medium text-[#4A8C7D] mb-2">Hours</h3>
                <div className="text-[#847C77] space-y-1">
                  <p>
                    <span className="font-medium">Friday:</span> 9:00 AM - 6:30 PM
                  </p>
                  <p>
                    <span className="font-medium">Saturday:</span> 9:00 AM - 4:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-[#4A8C7D] mt-1" />
              <div>
                <h3 className="text-xl font-medium text-[#4A8C7D] mb-2">Phone</h3>
                <a 
                  href="tel:0468808412"
                  className="text-[#847C77] hover:text-[#4A8C7D] transition-colors"
                >
                  0468 808 412
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#E8E4E1] rounded-lg overflow-hidden shadow-sm"
          >
            <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY || ''}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={location}
                zoom={15}
                options={{
                  styles: [
                    {
                      featureType: "all",
                      elementType: "all",
                      stylers: [
                        { saturation: -100 },
                        { lightness: 0 }
                      ]
                    }
                  ]
                }}
              >
                <Marker position={location} />
              </GoogleMap>
            </LoadScript>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 