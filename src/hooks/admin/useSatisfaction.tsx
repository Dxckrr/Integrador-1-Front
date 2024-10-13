import { useEffect, useState } from "react";
import { get_all_survey_data } from "../../services/satisfaction.service";
import { Satisfaction } from "../../types/Satisfaction";

export const useSatisfaction = () => {
  const [surveyData, setSurveyData] = useState<Satisfaction[]>([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await get_all_survey_data();
        setSurveyData(response);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (surveyData.length > 0) {
      const satisfactionCount = surveyData.reduce((acc, item) => {
        const nivel = item.nivel_satisfaccion;
        if (nivel >= 1 && nivel <= 5) {
          acc[nivel] = (acc[nivel] || 0) + 1;
        }
        return acc;
      }, {});

      const improvementAreas = surveyData.reduce((acc, item) => {
        const area = item.area_a_mejorar;
        acc[area] = acc[area] || { name: area, value: 0 };
        acc[area].value += 1;
        return acc;
      }, {});

      const improvementAreasArray = Object.values(improvementAreas);
      const totalResponses = surveyData.length;
      const averageSatisfaction = surveyData.reduce(
        (total, item) => total + item.nivel_satisfaccion,0);
      const npsScore = surveyData.filter((item) => item.recomendacion).length;

      setData({
        totalResponses,
        averageSatisfaction,
        npsScore,
        satisfactionDistribution: [
          satisfactionCount[1] || 0,
          satisfactionCount[2] || 0,
          satisfactionCount[3] || 0,
          satisfactionCount[4] || 0,
          satisfactionCount[5] || 0,
        ],
        improvementAreas: improvementAreasArray,
        recentFeedback: surveyData
          .map((item) => ({
            id: item.id,
            rating: item.calificacion,
            comment: item.comentarios,
          }))
          .slice(0, 5),
      });
    }
  }, [surveyData]);

  return { data };
};

export default useSatisfaction;
