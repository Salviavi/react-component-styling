function Button({ text, link, bgColor, hoverColor, textColor, extraClasses }) {
  return (
    <a href={link}>
      <button
        className={`${extraClasses} inline-flex ${textColor} ${bgColor} border-0 py-2 px-6 focus:outline-none ${hoverColor} rounded text-lg`}
      >
        {text}
      </button>
    </a>
  );
}

export default Button;
