interface IntegraPsisLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export default function IntegraPsisLogo({ size = 40, className = "", showText = true }: IntegraPsisLogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="mr-3"
      >
        {/* IntegraPsis logo inspired by the provided image */}
        <g>
          {/* Circular elements forming an interconnected pattern */}
          <circle cx="25" cy="25" r="8" className="fill-teal-500" />
          <circle cx="75" cy="25" r="8" className="fill-teal-500" />
          <circle cx="25" cy="75" r="8" className="fill-teal-500" />
          <circle cx="75" cy="75" r="8" className="fill-teal-500" />
          <circle cx="50" cy="50" r="10" className="fill-teal-600" />
          
          {/* Connecting lines */}
          <line x1="25" y1="25" x2="50" y2="50" className="stroke-teal-400" strokeWidth="3" />
          <line x1="75" y1="25" x2="50" y2="50" className="stroke-teal-400" strokeWidth="3" />
          <line x1="25" y1="75" x2="50" y2="50" className="stroke-teal-400" strokeWidth="3" />
          <line x1="75" y1="75" x2="50" y2="50" className="stroke-teal-400" strokeWidth="3" />
          
          {/* Additional smaller connection nodes */}
          <circle cx="37" cy="37" r="3" className="fill-teal-400" />
          <circle cx="63" cy="37" r="3" className="fill-teal-400" />
          <circle cx="37" cy="63" r="3" className="fill-teal-400" />
          <circle cx="63" cy="63" r="3" className="fill-teal-400" />
        </g>
      </svg>
      
      {showText && (
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-teal-600">
            IntegraPsis
          </span>
          <span className="text-sm text-gray-600 tracking-wide">
            SISTEMAS PARA CORRETORAS
          </span>
        </div>
      )}
    </div>
  );
}