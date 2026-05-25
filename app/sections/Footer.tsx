import { LogoMonogram } from "../components/Logo";

export function Footer() {
  return (
    <footer>
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="liquid-glass h-px mb-10" style={{ background: "transparent" }} />
      </div>
      <div className="max-w-5xl mx-auto px-6 md:px-10 pb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <LogoMonogram size={36} />
            <div>
              <p className="text-[13px] font-medium tracking-wide" style={{ color: "var(--fg)" }}>Мещерский 1</p>
              <p className="text-[12px] mt-0.5" style={{ color: "var(--jumbo)" }}>Дом в соснах с гостиничным сервисом</p>
            </div>
          </div>
          <div className="flex items-center gap-8 text-[12px]" style={{ color: "var(--jumbo)" }}>
            <span className="hover:text-[var(--fg)] transition-colors cursor-pointer">О проекте</span>
            <span className="hover:text-[var(--fg)] transition-colors cursor-pointer">Контакты</span>
            <span className="hover:text-[var(--fg)] transition-colors cursor-pointer">Конфиденциальность</span>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <p className="text-[11px]" style={{ color: "var(--cloudy)" }}>© 2026 Мещерский 1</p>
          <p className="text-[11px]" style={{ color: "var(--cloudy)" }}>Все права защищены</p>
        </div>
      </div>
    </footer>
  );
}
