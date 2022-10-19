import { Poem } from "../models";
import { getImageAndPageIdApi } from "../api/author/getImageAndPageIdApi";
import defaultAthorImage from "../assets/images/missing.jpg";

export const enrichAuthorsData = async (data: Poem[]): Promise<Poem[]> => {
  const promisesList = data.map(({ author }) => {
    return getImageAndPageIdApi(author);
  });

  const results = await Promise.allSettled(promisesList);

  const richData = results.map<Poem>((result, index) => {
    if (result.status === "fulfilled") {
      return {
        ...data[index],
        pageId: result.value.pageId,
        imageUrl: result.value.imageUrl ?? defaultAthorImage,
      };
    }
    return {
      ...data[index],
    };
  });

  return richData;
};
