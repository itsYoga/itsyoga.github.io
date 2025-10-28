import { useState } from 'react';
import LiquidGlassShader from './components/LiquidGlassShader';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Default glass parameters matching the aesthetic
  const glassUniforms = {
    width: 600,
    height: 400,
    mouseX: mousePos.x,
    mouseY: mousePos.y,
    tintR: 0.968,
    tintG: 1.0,
    tintB: 0.878,
    saturation: 1.0,
    distortion: 2.5,
    blur: 2.5,
    text: '',
    iconSize: 0.35,
    iconColorR: 1.0,
    iconColorG: 1.0,
    iconColorB: 1.0,
    glassMode: 'light' as const,
    shadowIntensity: 0.2,
    shadowOffsetX: 8,
    shadowOffsetY: 8,
    shadowBlur: 25,
    cornerRadius: 20,
    chromaticAberration: 0.5,
    shape: 'rectangle' as const,
    donutThickness: 0.3,
    starPoints: 5,
    starInnerRadius: 0.4
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50"
      onMouseMove={handleMouseMove}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-xl border-b border-white/20 z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <h1 className="text-lg font-light uppercase tracking-wider">YuJia Liang</h1>
          <ul className="flex gap-8">
            <li><a href="#about" className="text-sm uppercase tracking-wider opacity-80 hover:opacity-100 transition">About</a></li>
            <li><a href="#projects" className="text-sm uppercase tracking-wider opacity-80 hover:opacity-100 transition">Projects</a></li>
            <li><a href="#experience" className="text-sm uppercase tracking-wider opacity-80 hover:opacity-100 transition">Experience</a></li>
            <li><a href="#contact" className="text-sm uppercase tracking-wider opacity-80 hover:opacity-100 transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section with Glass Effect */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <LiquidGlassShader
            backgroundMedia={{
              url: 'https://images.unsplash.com/photo-1541869440787-abe7669a951a?q=80&w=3270',
              type: 'image'
            }}
            uniforms={glassUniforms}
          />
        </div>
        <div className="relative z-10 text-center px-8">
          <h1 className="text-8xl font-light tracking-tight mb-8">
            <div className="text-[#ff642f]">Computer</div>
            <div className="text-[#ff642f]">Science</div>
            <div className="text-[#ff642f]">Student</div>
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-70 mb-8">
            AI Enthusiast • Full-Stack Developer<br/>
            Building the Future of Technology
          </p>
          <a 
            href="/Resume_alt.pdf" 
            className="inline-flex items-center gap-3 px-10 py-4 bg-black/80 backdrop-blur-xl text-white uppercase tracking-widest text-sm rounded-full border border-white/20 hover:bg-[#ff642f]/90 transition-all shadow-xl"
            download
          >
            ↓ Download Resume
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-light uppercase tracking-wide mb-20">About</h2>
          <div className="grid grid-cols-2 gap-20">
            <div>
              <h3 className="text-3xl mb-6">Education</h3>
            </div>
            <div>
              <p className="text-lg leading-relaxed opacity-80 mb-6">
                <strong>National Taiwan Ocean University</strong><br/>
                B.S. in Computer Science and Engineering<br/>
                GPA: 3.6/4.0 | Sep. 2022 – May 2026
              </p>
              <p className="text-base leading-relaxed opacity-70">
                Focused on AI, Machine Learning, and Full-Stack Development. 
                Passionate about creating innovative solutions that bridge technology and real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-light uppercase tracking-wide mb-20">Featured Projects</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                title: 'Volleyball Line Judging System',
                desc: 'Automated line-judging using OpenCV and PyTorch for real-time court imagery processing.',
                tags: ['OpenCV', 'Python', 'PyTorch']
              },
              {
                title: 'Archon RWA Tokenization DApp',
                desc: 'DeFi platform for Real-World Asset tokenization with role-based access control.',
                tags: ['React', 'Solidity', 'TypeScript']
              },
              {
                title: 'ASL Hand Gesture Recognition',
                desc: 'iOS app with CreateML to classify 28 ASL hand gestures in real-time.',
                tags: ['SwiftUI', 'CreateML', 'iOS']
              },
              {
                title: 'SyncUp - Social Calendar',
                desc: 'Flutter app with Firebase, Google Maps, and AI-powered scheduling.',
                tags: ['Flutter', 'Firebase', 'RAG']
              },
              {
                title: 'Image Processing Project',
                desc: 'Complete ISP pipeline with 3A algorithms and computer vision features.',
                tags: ['OpenCV', 'NumPy', 'Python']
              },
              {
                title: 'WWDC 2025 Submission',
                desc: 'Hand Gesture Recognition App submitted to Apple\'s WWDC conference.',
                tags: ['Swift', 'ML', 'WWDC']
              }
            ].map((project, i) => (
              <div 
                key={i}
                className="p-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl hover:border-[#ff642f]/30 hover:translate-y-[-8px] transition-all shadow-xl"
              >
                <h4 className="text-xl mb-4">{project.title}</h4>
                <p className="text-sm opacity-70 mb-6">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="text-xs px-4 py-2 bg-white/10 backdrop-blur-md rounded-full uppercase tracking-wide border border-white/20 hover:bg-[#ff642f]/10 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-8 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-light uppercase tracking-wide mb-20">Experience</h2>
          <div className="grid grid-cols-2 gap-12">
            <div className="p-8 bg-white/10 backdrop-blur-xl border-l-4 border-[#ff642f]/30 rounded-xl">
              <h4 className="text-2xl mb-2">AI Image Recognition Intern</h4>
              <div className="text-lg opacity-70 mb-3">ITRI</div>
              <div className="text-sm uppercase tracking-wide opacity-50 mb-4">Jun. 2025 – Aug. 2025</div>
              <ul className="space-y-2">
                <li>Optimized YOLO model achieving 99% accuracy</li>
                <li>99% driving area accuracy and 97% recall rate</li>
                <li>Implemented real-time image streaming protocols</li>
              </ul>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-xl border-l-4 border-[#ff642f]/30 rounded-xl">
              <h4 className="text-2xl mb-2">Full-Stack Developer</h4>
              <div className="text-lg opacity-70 mb-3">Freelance</div>
              <div className="text-sm uppercase tracking-wide opacity-50 mb-4">2023 – present</div>
              <ul className="space-y-2">
                <li>Built multiple web applications and mobile apps</li>
                <li>DeFi platform development</li>
                <li>AI-powered application integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-12 pt-20 border-t border-black/10">
            <div>
              <div className="text-xs uppercase tracking-widest opacity-50 mb-3">Email</div>
              <a href="mailto:ch993115@gmail.com" className="text-lg hover:opacity-70 transition">ch993115@gmail.com</a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest opacity-50 mb-3">LinkedIn</div>
              <a href="https://www.linkedin.com/in/yu-jia-liang-77ab022a7" className="text-lg hover:opacity-70 transition">Connect</a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest opacity-50 mb-3">GitHub</div>
              <a href="https://github.com/itsYoga" className="text-lg hover:opacity-70 transition">itsYoga</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-sm uppercase tracking-widest opacity-50">
        © 2025 YuJia Liang • Taipei, Taiwan
      </footer>
    </div>
  );
}

export default App;

