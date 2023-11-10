export default function Button({ content, variant, color }) {
  return (
    <button className={`btn bg-${variant}-500 font-bold text-${color}`}>
      {content}
    </button>
  );
}
