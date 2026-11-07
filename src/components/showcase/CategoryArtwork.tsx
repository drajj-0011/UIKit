import type { CategoryId } from "@/data/registry";

export function CategoryArtwork({ type }: { type: CategoryId }) {
  return (
    <svg className={`category-art art-${type}`} viewBox="0 0 260 130" fill="none" aria-hidden="true">
      {type === "buttons" && <>
        <rect x="48" y="35" width="119" height="38" rx="6" fill="#baff39" />
        <rect x="64" y="52" width="53" height="4" rx="2" fill="#18230c" opacity=".75" />
        <path d="M142 54h10m-4-4 4 4-4 4" stroke="#18230c" strokeWidth="1.5" />
        <rect x="72" y="80" width="119" height="30" rx="6" stroke="#97a98c" strokeOpacity=".4" />
        <path d="m177 70 9 21 4-8 8-3-21-10Z" fill="#f6f8f3" stroke="#12170e" strokeWidth="2" />
      </>}
      {type === "cards" && <>
        <rect x="58" y="29" width="137" height="78" rx="7" transform="rotate(-9 58 29)" fill="#20291b" stroke="#91a186" strokeOpacity=".25" />
        <rect x="73" y="24" width="137" height="78" rx="7" fill="#20291b" stroke="#baff39" strokeOpacity=".6" />
        <rect x="86" y="37" width="29" height="29" rx="4" fill="#baff39" fillOpacity=".85" />
        <path d="M125 44h57M125 54h38M86 80h96" stroke="#d3dfcb" strokeOpacity=".4" strokeWidth="3" strokeLinecap="round" />
      </>}
      {type === "forms" && <>
        <rect x="47" y="31" width="166" height="35" rx="6" fill="#20271e" stroke="#baff39" strokeOpacity=".6" />
        <path d="M61 49h60" stroke="#c7d3c1" strokeOpacity=".5" strokeWidth="3" strokeLinecap="round" />
        <path d="M190 43v12" stroke="#baff39" strokeWidth="2" />
        <rect x="48" y="80" width="36" height="19" rx="9.5" fill="#baff39" />
        <circle cx="74" cy="89.5" r="6.5" fill="#1a2114" />
        <path d="M97 89h70" stroke="#c7d3c1" strokeOpacity=".3" strokeWidth="3" strokeLinecap="round" />
      </>}
      {type === "feedback" && <>
        <rect x="45" y="36" width="170" height="65" rx="8" fill="#20291b" stroke="#96a88b" strokeOpacity=".35" />
        <circle cx="70" cy="68" r="12" fill="#baff39" />
        <path d="m65 68 3 3 6-7" stroke="#19230f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M91 61h67M91 73h93" stroke="#d3dfcb" strokeOpacity=".55" strokeWidth="3" strokeLinecap="round" />
        <path d="M91 83h56" stroke="#d3dfcb" strokeOpacity=".22" strokeWidth="3" strokeLinecap="round" />
      </>}
      {type === "navigation" && <>
        <rect x="39" y="43" width="182" height="42" rx="7" fill="#20271e" stroke="#a4b59a" strokeOpacity=".3" />
        <rect x="45" y="49" width="55" height="30" rx="4" fill="#baff39" />
        <path d="M56 64h32" stroke="#18230c" strokeWidth="3" strokeLinecap="round" />
        <path d="M114 64h31M165 64h36" stroke="#c4d0be" strokeOpacity=".4" strokeWidth="3" strokeLinecap="round" />
      </>}
      {type === "interactive" && <>
        <circle cx="130" cy="64" r="43" stroke="#baff39" strokeOpacity=".15" />
        <circle cx="130" cy="64" r="30" stroke="#baff39" strokeOpacity=".3" />
        <circle cx="130" cy="64" r="18" fill="#baff39" fillOpacity=".12" stroke="#baff39" strokeOpacity=".65" />
        <path d="m127 48 5 28 5-8 9-2-19-18Z" fill="#baff39" stroke="#19230e" strokeWidth="2" strokeLinejoin="round" />
      </>}
      {type === "physics" && <>
        <ellipse cx="130" cy="66" rx="72" ry="29" transform="rotate(-24 130 66)" stroke="#baff39" strokeOpacity=".3" />
        <ellipse cx="130" cy="66" rx="72" ry="29" transform="rotate(24 130 66)" stroke="#baff39" strokeOpacity=".3" />
        <circle cx="130" cy="66" r="18" fill="#baff39" />
        <circle cx="72" cy="45" r="5" fill="#baff39" fillOpacity=".8" />
        <circle cx="190" cy="45" r="3" fill="#baff39" fillOpacity=".7" />
      </>}
      {type === "data" && <>
        <path d="M49 99h165" stroke="#9dad92" strokeOpacity=".3" />
        <rect x="60" y="70" width="18" height="29" rx="3" fill="#526b3c" />
        <rect x="91" y="52" width="18" height="47" rx="3" fill="#658b42" />
        <rect x="122" y="62" width="18" height="37" rx="3" fill="#526b3c" />
        <rect x="153" y="33" width="18" height="66" rx="3" fill="#baff39" />
        <rect x="184" y="45" width="18" height="54" rx="3" fill="#83b64a" />
        <path d="m69 63 31-18 31 10 31-29 31 12" stroke="#baff39" strokeWidth="1.5" strokeOpacity=".6" />
      </>}
    </svg>
  );
}