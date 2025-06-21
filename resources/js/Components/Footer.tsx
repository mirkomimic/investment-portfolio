export const Footer = ({
  laravelVersion,
  phpVersion,
}: {
  laravelVersion: string;
  phpVersion: string;
}) => {
  return (
    <footer className="py-16 text-center text-sm text-black dark:text-white/70">
      Laravel v{laravelVersion} (PHP v{phpVersion})
    </footer>
  );
};
