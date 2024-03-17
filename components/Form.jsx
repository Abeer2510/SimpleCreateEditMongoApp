import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section>
      <h1>
        <span>{type} Post</span>
      </h1>
      <p> {type} and share  </p>

      <form onSubmit={handleSubmit}>
        <label>
          <span> Text1 </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, text1: e.target.value })}
            placeholder='Text1'
            required
          />
        </label>

        <label>
          <span> Text2 </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, text2: e.target.value })}
            placeholder='Text1'
            required
          />
        </label>

        <label>
          <span> Num1 </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, num1: e.target.value })}
            placeholder='Text1'
            required
          />
        </label>

        <div>
          <button type='submit' disabled={submitting}>
            {submitting ? `${type}ing...` : type}
          </button>

        </div>
      </form>
    </section>
  );
};

export default Form;

