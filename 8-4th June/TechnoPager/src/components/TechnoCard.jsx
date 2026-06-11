import photo from "../assests/photo.jpg";

function TechnoCard(props) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        My Techno Card
      </h1>

      <img
        src={photo}
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
      />

      <div className="space-y-3 mb-6">
        <p>
          <span className="font-semibold">Name:</span>
          {props.fullName}
        </p>

        <p>
          <span className="font-semibold">Email:</span>
          {props.emailId}
        </p>

        <p>
          <span className="font-semibold">Location:</span>
          {props.location}
        </p>

        <p>
          <span className="font-semibold">Contact:</span>
          {props.contactNo}
        </p>

        <p>
          <span className="font-semibold">College:</span>
          {props.collegeName}
        </p>

        <p>
          <span className="font-semibold">Tag Line:</span>
          {props.tagLine}
        </p>
      </div>

      <div>
        
      </div>

      {props.workedOnProject && (
        <div className="bg-green-100 border-2 border-black rounded-lg p-4 mb-6">
          <h3 className="font-bold text-green-700 mb-2">Project Details:</h3>

          <ul>
            <li>1. Sign Language </li>
            <li>2. RAG Chatbot</li>
            <li>3. Emotion Recognition</li>
          </ul>
        </div>
      )}

      <table className="w-full border-2 border-black rounded-lg">
        <thead>
          <tr className="bg-blue-500 text-white border-2 border-black">
            <th className="border p-3">Technology</th>
            <th className="border p-3">Details</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-3">Java</td>
            <td className="border p-3">{props.javaLevel}</td>
          </tr>

          <tr>
            <td className="border p-3">React</td>
            <td className="border p-3">{props.reactKnowledge}</td>
          </tr>

          <tr>
            <td className="border p-3">AI</td>
            <td className="border p-3">{props.aiDetails}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TechnoCard;
