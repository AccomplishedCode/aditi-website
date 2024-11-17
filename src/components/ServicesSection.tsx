import { motion } from 'framer-motion';
import { 
  Heart,
  Brain,
  Briefcase,
  User,
  Users,
  Sparkles,
  HeartPulse,
  Sprout
} from 'lucide-react';

interface ServiceCategory {
  title: string;
  description: string;
  icon: any;
  services: {
    name: string;
    description: string;
  }[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Emotional Wellbeing",
    description: "Support for managing emotions and mental health",
    icon: Brain,
    services: [
      {
        name: "Anxiety & Mood Disorders",
        description: "Specialized treatment for anxiety, panic, and mood-related challenges"
      },
      {
        name: "Depression",
        description: "Evidence-based support for managing depression and improving daily life"
      }
    ]
  },
  {
    title: "Professional Life",
    description: "Support for workplace challenges",
    icon: Briefcase,
    services: [
      {
        name: "Workplace Psychological Injury",
        description: "Recovery and support for work-related psychological challenges"
      },
      {
        name: "Stress Management",
        description: "Effective strategies for managing work and life stress"
      }
    ]
  },
  {
    title: "Body & Self",
    description: "Support for personal identity and body image",
    icon: HeartPulse,
    services: [
      {
        name: "Maladaptive Eating",
        description: "Compassionate support for eating-related challenges"
      },
      {
        name: "Body Image Concerns",
        description: "Building a healthy relationship with self-image"
      }
    ]
  },
  {
    title: "Life Changes",
    description: "Support during major life transitions",
    icon: Sprout,
    services: [
      {
        name: "Trauma & Recovery",
        description: "Trauma-informed care for healing and growth"
      },
      {
        name: "Grief & Loss",
        description: "Support through bereavement and significant losses"
      },
      {
        name: "Life Transitions",
        description: "Guidance through major life changes and adjustments"
      }
    ]
  },
  {
    title: "Relationships",
    description: "Building stronger connections",
    icon: Users,
    services: [
      {
        name: "Social Skills Development",
        description: "Building confidence in social interactions"
      },
      {
        name: "Positive Relationships",
        description: "Creating and maintaining healthy relationships"
      },
      {
        name: "Bullying",
        description: "Support and strategies for dealing with bullying"
      }
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#E8E4E1]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-[#4A8C7D]">
            Therapeutic Services
          </h2>
          <p className="text-[#847C77] max-w-2xl mx-auto">
            Comprehensive support for various life challenges, delivered with empathy and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <category.icon className="w-6 h-6 text-[#4A8C7D] mr-3 stroke-2" />
                <h3 className="text-xl font-medium text-[#4A8C7D]">{category.title}</h3>
              </div>
              <p className="text-[#847C77] mb-4">{category.description}</p>
              <ul className="space-y-3">
                {category.services.map((service) => (
                  <motion.li
                    key={service.name}
                    whileHover={{ x: 4 }}
                    className="flex items-start"
                  >
                    <HeartPulse className="w-5 h-5 text-[#9CAF98] mt-1 mr-2" />
                    <div>
                      <h4 className="text-[#4A8C7D] font-medium">{service.name}</h4>
                      <p className="text-sm text-[#847C77]">{service.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 