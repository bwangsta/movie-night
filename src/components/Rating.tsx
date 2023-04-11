import { FaStar } from "react-icons/fa"

type RatingProps = {
  rating: number
}

function Rating({ rating }: RatingProps) {
  let color = ""
  if (rating >= 8.0) {
    color = "bg-green-600"
  } else if (rating < 8.0 && rating >= 6.0) {
    color = "bg-orange-500"
  } else {
    color = "bg-red-600"
  }

  return (
    <div
      className={`absolute right-0 top-0 flex items-center gap-1 ${color} p-2`}
    >
      <FaStar color="yellow" />
      <p className="text-xl font-bold text-white">{rating}</p>
    </div>
  )
}

export default Rating
