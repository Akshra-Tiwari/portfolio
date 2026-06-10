import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px', height: '630px', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          background: '#0a0a0b', position: 'relative', overflow: 'hidden',
        }}
      >
        <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize:'30px 30px' }} />
        <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'800px', height:'500px', background:'radial-gradient(ellipse, rgba(139,92,246,0.15) 0%, transparent 70%)', borderRadius:'50%' }} />
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'24px', position:'relative', zIndex:1 }}>
          <div style={{ width:'72px', height:'72px', borderRadius:'18px', background:'rgba(139,92,246,0.2)', border:'1.5px solid rgba(139,92,246,0.4)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px', fontWeight:800, color:'#a78bfa' }}>AT</div>
          <div style={{ fontSize:'72px', fontWeight:800, color:'#ffffff', letterSpacing:'-3px', lineHeight:1, textAlign:'center' }}>Akshra Tiwari</div>
          <div style={{ fontSize:'24px', color:'rgba(167,139,250,0.9)', letterSpacing:'4px', textTransform:'uppercase', fontWeight:500 }}>Full Stack Developer</div>
          <div style={{ display:'flex', gap:'12px', marginTop:'8px' }}>
            {['React', 'Node.js', 'Next.js', 'MongoDB'].map(tag => (
              <div key={tag} style={{ padding:'6px 16px', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'100px', fontSize:'14px', color:'rgba(255,255,255,0.6)' }}>{tag}</div>
            ))}
          </div>
          <div style={{ fontSize:'16px', color:'rgba(255,255,255,0.3)', marginTop:'8px' }}>B.Tech CSE · RGPV · 2023–2027</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
