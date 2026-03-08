import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);

    const title = searchParams.get('title') || 'Dynamic Open Graph API';
    const subtitle = searchParams.get('subtitle') || 'Generated on the Edge seamlessly.';
    const background = searchParams.get('bg') || '#0f172a';
    const textColor = searchParams.get('color') || '#ffffff';
    const theme = searchParams.get('theme') || 'glassy';

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    backgroundColor: background,
                    backgroundImage: theme === 'retro'
                        ? 'repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05)), repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05))'
                        : theme === 'dots'
                            ? 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.1) 2%, transparent 0%)'
                            : 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
                    backgroundPosition: theme === 'retro' ? '0 0, 10px 10px' : '0 0',
                    backgroundSize: theme === 'retro' ? '20px 20px' : theme === 'dots' ? '100px 100px' : '100% 100%',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '60px 80px',
                        backgroundColor: theme === 'glassy' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.3)',
                        borderRadius: theme === 'glassy' ? '32px' : '8px',
                        border: theme === 'glassy' ? '2px solid rgba(255, 255, 255, 0.1)' : '4px solid rgba(255,255,255,0.2)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                    }}
                >
                    <div
                        style={{
                            fontSize: 64,
                            fontStyle: 'normal',
                            fontWeight: 800,
                            color: textColor,
                            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                            marginBottom: '24px',
                            textAlign: 'center',
                            maxWidth: '800px',
                            wordWrap: 'break-word',
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            fontSize: 32,
                            fontStyle: 'normal',
                            color: 'rgba(255,255,255,0.7)',
                            fontWeight: 400,
                            textAlign: 'center',
                            maxWidth: '700px',
                        }}
                    >
                        {subtitle}
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
