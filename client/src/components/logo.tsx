interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export default function Logo({ size = 40, className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className="mr-3"
      >
        {/* Brain half */}
        <g className="fill-gray-300">
          <path d="M50 100 C50 60, 80 40, 100 60 C100 50, 110 45, 120 50 C125 45, 135 45, 140 50 C145 40, 155 45, 160 55 C165 50, 175 55, 180 65 C185 60, 195 70, 190 80 C195 85, 190 95, 185 100 C190 105, 185 115, 180 120 C185 125, 175 130, 165 125 C160 130, 150 125, 145 120 C140 130, 130 125, 125 120 C120 125, 110 120, 105 115 C100 125, 85 120, 80 110 C75 115, 65 110, 60 105 C55 110, 45 105, 50 100 Z" />
        </g>
        
        {/* Circuit half */}
        <g className="stroke-gray-400 fill-none" strokeWidth="3">
          {/* Main vertical line */}
          <line x1="100" y1="50" x2="100" y2="150" />
          
          {/* Horizontal lines with nodes */}
          <line x1="100" y1="70" x2="140" y2="70" />
          <circle cx="145" cy="70" r="5" className="fill-gray-400" />
          
          <line x1="100" y1="90" x2="130" y2="90" />
          <line x1="130" y1="90" x2="130" y2="110" />
          <line x1="130" y1="110" x2="150" y2="110" />
          <circle cx="155" cy="110" r="5" className="fill-gray-400" />
          
          <line x1="100" y1="130" x2="120" y2="130" />
          <line x1="120" y1="130" x2="120" y2="150" />
          <line x1="120" y1="150" x2="140" y2="150" />
          <circle cx="145" cy="150" r="5" className="fill-gray-400" />
          
          {/* Top connection */}
          <line x1="100" y1="50" x2="115" y2="35" />
          <circle cx="120" cy="30" r="5" className="fill-gray-400" />
        </g>
        
        {/* Central connection point */}
        <circle cx="100" cy="100" r="8" className="fill-gray-500" />
      </svg>
      
      {showText && (
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-gradient">
            IntegraDev.ia
          </span>
          <span className="text-sm italic text-gray-600 tracking-wide">
            AUTOMAÇÕES E DESENVOLVIMENTO DE SISTEMAS  
          </span>
        </div>
      )}
    </div>
  );
}