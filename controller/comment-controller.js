import Comment from "../model/comments-schema.js";

export const postComment = async (request, response) => {
  try {
    const comment = await new Comment(request.body);
    comment.save();
    response.status(200).json("Blog saved successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getComments = async (request, response) => {
  try {
    const comments = await Comment.find({ postId: request.params.id });
    response.status(200).json(comments);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const deleteComment = async (request, response) => {
  try {
    const comment = await Comment.findById(request.params.id);
    await comment.delete();
    response.status(200).json("Comment deleted successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};
