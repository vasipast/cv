const Project = ({ title, date, tags, description, link }) => {
  return (
    <div className="mb-4 px-5 py-2 bg-gray-200 bg-opacity-40 rounded-md">
      <h3 className="text-lg text-left text-gray-400">{date}</h3>

      <div className="">
        <h4 className="text-lg font-bold text-left text-gray-800">{title}</h4>

        <p className="text-left">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-300 text-gray-600 px-2 py-1 my-2 rounded-md mr-2"
            >
              {tag}
            </span>
          ))}
        </p>

        <p className="text-gray-600 text-left">{description}</p>

        <div className="text-left">
          <a
            href={link}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Link to GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
