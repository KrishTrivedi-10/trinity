import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' as const } },
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const blogs: Record<string, {
  id: number; title: string; date: string; tag: string;
  image: string; readTime: string;
  content: string[];
}> = {
  '7': {
    id: 7, title: 'Brahmasthan in Vaastu', date: '10 Jan 2024', tag: 'Vaastu', readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=2000&auto=format&fit=crop',
    content: [
      'The Brahmasthan is the central zone of any building or plot. In Vedic architecture, this space was intentionally left open to receive and radiate solar energy. It is the energetic heart of any structure.',
      'In ancient times, traditional homes in India were built around an open courtyard at the center — the Brahmasthan. Sunlight falling on this central space was considered sacred. It represented the cosmic navel, connecting the individual structure to universal energy.',
      'When the Brahmasthan is obstructed — by toilets, staircases, heavy pillars, or cluttered storage — the entire energy distribution of the building is disrupted. This affects all zones radiating outward from the center.',
      'The central portion, when left open or lightly used, allows positive energy to flow freely to every corner of the space. When blocked, it creates a kind of "energetic suffocation" that impacts residents in multiple life areas — health, finance, relationships, and mental clarity.',
      'Corrections for a blocked Brahmasthan include using light colours, removing heavy objects, introducing specific crystals or yantras, and ensuring adequate ventilation. Structural changes are a last resort.',
      'Understanding the Brahmasthan is foundational to Vaastu. It is the first zone assessed in any professional consultation because its condition influences the effectiveness of all other remedies.',
    ],
  },
  '6': {
    id: 6, title: 'Vaastu Shastra and Manasputra', date: '10 Jan 2024', tag: 'Vaastu', readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
    content: [
      'Structure is not just four walls. It is the structure of your mind. The Sanskrit concept of Manasputra — meaning "born of the mind" — points to the deep connection between the spaces we inhabit and the thoughts we generate.',
      'Vaastu Shastra teaches that every built space reflects and reinforces the mental state of its occupants. The directions, proportions, materials, and energy flow of a building create an invisible framework that shapes consciousness.',
      'Whether your thoughts are expansive or contracted, creative or fearful, depends partly on the spatial environment you spend your time in. A space with blocked North (water element, career, opportunities) quietly suppresses ambition. A compromised East (Sun, clarity, health) dims mental brightness.',
      'The Manasputra principle also explains why two people living in the same house can experience entirely different outcomes. Their individual Kundali interacts differently with the space energy, amplifying or dampening specific life areas.',
      'This is why in Trinity Vaastu, no two consultations produce the same remedy. The space is analysed in relationship to the specific individual — their birth chart, their numerological profile, and their current life challenges.',
      'True Vaastu work is not architectural. It is psychological and energetic — designed to align the structure of your space with the structure of your highest potential.',
    ],
  },
  '5': {
    id: 5, title: 'Impact of Toilet Seat and Its Remedies in Vaastu', date: '10 Jan 2024', tag: 'Vaastu', readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop',
    content: [
      'Every function in a building is assigned to a specific directional zone based on the five elements. The toilet, representing disposal and elimination, must be placed in zones that can energetically support this function.',
      'When placed in the wrong zone — particularly the North, which governs prosperity and opportunities, or the East, which governs health and rising energy — the toilet\'s disposal energy actively drains the qualities of that zone.',
      'A toilet in the North literally flushes wealth and career opportunities. A toilet in the East disturbs health and mental clarity. These are not superstitions. They are observed patterns in thousands of case studies.',
      'Remedies depend on the specific situation. Where structural relocation is not possible, colour corrections, mirror placements, element balancing, and specific yantra installations can significantly mitigate the impact.',
      'The key is correct diagnosis. Not every toilet placement is equally damaging. The severity depends on the exact zone, the size of the toilet, the overall building energy, and the individual\'s kundali relationship with that zone.',
      'This is why professional Vaastu guidance is essential. Generic advice about toilets is rarely accurate. Precise assessment is what creates real results.',
    ],
  },
  '4': {
    id: 4, title: 'Shoerack: Position and Placement in Vaastu', date: '24 Sep 2023', tag: 'Vaastu', readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2000&auto=format&fit=crop',
    content: [
      'Entrances are the primary gateway of energy into any space. The quality of energy entering your home determines the quality of life within it. Shoeracks, when incorrectly placed near entrances, create specific energetic blocks.',
      'Shoes carry outdoor energy — the accumulated vibrations of every place you have visited. Placing a shoerack in the North or Northeast of the entrance brings heavy, dispersed, and sometimes negative energy into zones responsible for prosperity and divine connection.',
      'The Southwest zone — representing stability, weight, and grounding — is the most appropriate location for shoeracks. This is also the zone of master bedrooms and storage of heavy objects.',
      'If placement in the Southwest is not possible, the South or West zones are acceptable alternatives. The North, Northeast, and East should always be kept free of shoe storage.',
      'Additionally, shoeracks should be kept closed. Open storage of footwear allows the mixed outdoor energies to continuously radiate into the interior space.',
      'This is a small correction that makes a measurable difference. Clients who implement correct shoerack placement often report a cleaner, lighter feeling in their homes within days.',
    ],
  },
  '3': {
    id: 3, title: 'Dustbin: The Disposal Zone in Vaastu', date: '24 Sep 2023', tag: 'Vaastu', readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2000&auto=format&fit=crop',
    content: [
      'Disposal energy is a fundamental concept in Vaastu. Every zone of a building has a specific elemental quality. When disposal objects — dustbins, waste — are placed in zones of prosperity or growth, they energetically drain those qualities.',
      'The SSW (South-Southwest) zone governs disposal, waste, and elimination in Vaastu. Placing dustbins in this zone is energetically neutral — the zone can absorb and process this energy without damage to other life areas.',
      'A dustbin in the North (prosperity, career) subtly drains financial opportunities. A dustbin in the East (health, morning energy) can impact physical vitality over time. These are slow, cumulative effects that become apparent only over months or years.',
      'Colours of dustbins also matter. Dark colours — black, brown, dark green — in appropriate zones are preferable. Bright red or orange dustbins in prominent locations introduce aggressive fire energy that can cause conflict and stress.',
      'This level of detail is what separates professional Vaastu from general advice. Every object in a space carries energy. The placement and colour of even a dustbin is part of the overall energetic composition.',
    ],
  },
  '2': {
    id: 2, title: 'Problems Due to Geopathic Stress', date: '20 Jul 2023', tag: 'Energy', readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?q=80&w=2000&auto=format&fit=crop',
    content: [
      'Geopathic stress refers to distorted natural earth energies that can negatively affect the health and wellbeing of people spending extended time in an affected space. It is one of the most underdiagnosed factors in chronic health and life problems.',
      'Natural earth energies flow in specific patterns beneath the surface. When these patterns are disrupted — by underground water streams, geological fault lines, mineral deposits, or human interference such as excessive drilling, tunnelling, or construction — geopathic stress zones are created.',
      'People sleeping or working in geopathic stress zones over long periods report persistent health problems, sleep disorders, low immunity, anxiety, and in serious cases, chronic degenerative diseases. Animals and plants also respond negatively to these zones.',
      'Modern factors that intensify geopathic stress include high-rise construction that cuts through natural earth layers, extensive underground infrastructure, and electromagnetic fields from large electrical installations.',
      'Detection requires professional assessment. Traditional methods include dowsing. Modern methods use electromagnetic sensors and geological mapping. Experienced Vaastu practitioners integrate geopathic stress assessment as part of comprehensive site analysis.',
      'Remedies include sleeping position corrections, strategic placement of specific minerals and crystals that can neutralise or redirect the disturbed energy, and in some cases, structural modifications to reduce exposure.',
    ],
  },
  '1': {
    id: 1, title: 'Cure of Disease with Vaastu — How Vaastu Affects Your Body', date: '28 Feb 2023', tag: 'Health', readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2000&auto=format&fit=crop',
    content: [
      'Every cell in your body responds to the environment you live in. Light, sound, temperature, air quality — these are well-understood physical factors. But the directional energy of a space, the balance of elements, and the quality of energy flow also affect biological systems in measurable ways.',
      'Vaastu Shastra maps the body onto the building. The East zone corresponds to the rising energy of the sun and governs physical health and vitality. The North corresponds to the water element and influences kidney, reproductive, and circulatory health. The South governs stability and muscular strength.',
      'When these zones are blocked, over-burdened, or contaminated with incompatible energy — through wrong placements of toilets, bedrooms, kitchens, or heavy objects — the corresponding body systems in the occupants experience subtle but measurable stress.',
      'This is not metaphor. It is resonance. The body mirrors the space because both are energy systems operating according to the same universal principles.',
      'Clinical observations in thousands of consultations have shown consistent patterns. Chronic lower back pain in occupants of homes with a compromised Southwest. Persistent respiratory issues when the East is blocked. Hormonal imbalances when the Northwest is disturbed.',
      'Healing through Vaastu does not replace medical treatment. It addresses the energetic environment that may be sustaining or amplifying physical conditions. When space corrections are made alongside medical care, recovery is often faster and more complete.',
      'This is the promise of integrative Vaastu — not a replacement for medicine, but a profound complement to it. A home that heals is the foundation of a life that thrives.',
    ],
  },
};

const allBlogs = Object.values(blogs);

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogs[id] : null;

  if (!post) {
    return (
      <div className="page-wrapper" style={{ background: '#FFFFFF', textAlign: 'center', paddingTop: '12rem', paddingBottom: '8rem' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', marginBottom: '1.5rem' }}>Post Not Found</h1>
          <Link to="/blog" className="btn-primary">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const related = allBlogs.filter(b => b.id !== post.id).slice(0, 3);

  return (
    <div className="page-wrapper" style={{ background: '#FFFFFF' }}>

      {/* ── HERO IMAGE ── */}
      <section style={{ height: '65vh', position: 'relative', overflow: 'hidden', marginTop: '0' }}>
        <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,5,5,0.8) 0%, rgba(10,5,5,0.2) 60%, transparent 100%)' }} />
        <div className="container" style={{ position: 'absolute', bottom: '4rem', left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '860px' }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, background: 'rgba(200,150,27,0.2)', padding: '0.4rem 1rem', borderRadius: '100px' }}>{post.tag}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}><Calendar size={12} />{post.date}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}><Clock size={12} />{post.readTime}</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#FFFFFF', lineHeight: 1.2 }}>{post.title}</h1>
          </motion.div>
        </div>
      </section>

      {/* ── ARTICLE ── */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '6rem', alignItems: 'start' }}>

          {/* Content */}
          <motion.article initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '3rem', textDecoration: 'none' }}>
              <ArrowLeft size={14} /> Back to all articles
            </Link>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {post.content.map((para, i) => (
                <motion.p key={i} variants={revealUp}
                  style={{ fontSize: i === 0 ? '1.15rem' : '1rem', color: 'var(--text-muted)', fontWeight: i === 0 ? 400 : 300, lineHeight: 1.95 }}>
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Author */}
            <motion.div variants={revealUp}
              style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginTop: '4rem', padding: '2rem', background: 'var(--cream)', borderRadius: '1.5rem', border: '1px solid var(--border)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--maroon)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: '#fff', fontFamily: 'var(--font-serif)', fontSize: '1.2rem' }}>SJ</span>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>Saarthi Sahil Jain</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 300 }}>Founder, Trinity Gurukul · Vaastu & Occult Science Expert</div>
              </div>
            </motion.div>
          </motion.article>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: '6rem' }}>
            <div style={{ background: 'var(--maroon)', borderRadius: '1.5rem', padding: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#fff', marginBottom: '1rem' }}>Book a Consultation</h4>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', fontWeight: 300, lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Apply the insights from this article to your own space with a personalised Vaastu consultation.
              </p>
              <Link to="/consultation" className="btn-primary" style={{ width: '100%', justifyContent: 'center', background: 'var(--gold)', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Book Now <ArrowRight size={14} />
              </Link>
            </div>

            <div style={{ background: 'var(--cream)', borderRadius: '1.5rem', padding: '2rem', border: '1px solid var(--border)' }}>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '1.5rem' }}>Quick Info</h4>
              {[
                { icon: Tag, label: 'Category', val: post.tag },
                { icon: Calendar, label: 'Published', val: post.date },
                { icon: Clock, label: 'Read Time', val: post.readTime },
              ].map(({ icon: Icon, label, val }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}><Icon size={13} />{label}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-main)', fontWeight: 600 }}>{val}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* ── RELATED POSTS ── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={revealUp} style={{ marginBottom: '3rem' }}>
              <span className="label">Continue Reading</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginTop: '0.75rem' }}>Related <em>Articles</em></h2>
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem' }}>
              {related.map(r => (
                <motion.div key={r.id} variants={revealUp}
                  style={{ background: '#FFFFFF', borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid var(--border)' }}
                  whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}>
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img src={r.image} alt={r.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} />
                  </div>
                  <div style={{ padding: '1.75rem' }}>
                    <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700 }}>{r.tag}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{r.date}</span>
                    </div>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '1rem', lineHeight: 1.4 }}>{r.title}</h4>
                    <Link to={`/blog/${r.id}`} style={{ fontSize: '0.8rem', color: 'var(--maroon)', fontWeight: 700, letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}>
                      Read Article <ArrowRight size={13} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
